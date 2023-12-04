import {
  SecretsManagerClient,
  GetSecretValueCommand,
  SecretsManagerClientConfig,
} from '@aws-sdk/client-secrets-manager';

import { TSecrets } from '..';

let client: SecretsManagerClient;
const secrets: TSecrets = {};

export function initializeSecretsManager() {
  const config: SecretsManagerClientConfig =
    process.env.ENVIRONMENT === 'local'
      ? {
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
          },
          endpoint: process.env.AWS_ENDPOINT,
          region: process.env.AWS_REGION,
        }
      : {};

  client = new SecretsManagerClient(config);
}

export async function getSecret(key: string): Promise<string | undefined> {
  if (secrets[key]) return secrets[key];

  const value = await getSecretFromAWS(key);
  secrets[key] = value;
  return value;
}

async function getSecretFromAWS(id: string): Promise<string | undefined> {
  try {
    const command = new GetSecretValueCommand({
      SecretId: id,
    });
    const { SecretString } = await client.send(command);
    return SecretString;
  } catch (error: any) {
    const message = `SecretsManager error: [${error.$metadata.httpStatusCode}] - ${error.message}`;
    // tslint:disable-next-line
    console.error(message);
    throw new Error(message);
  }
}
