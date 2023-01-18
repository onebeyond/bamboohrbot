import {
  SecretsManagerClient,
  GetSecretValueCommand,
  SecretsManagerClientConfig,
} from '@aws-sdk/client-secrets-manager';

let client: SecretsManagerClient;

export const initializeSecretsManager = () => {
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
};

export const getSecret = async (id: string): Promise<string | undefined> => {
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
};
