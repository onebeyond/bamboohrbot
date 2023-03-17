# bamboohrbot
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

🤖 Bot to publish BambooHR notifications to slack each weekday:

- Who's at the office
- Birthdays
- Work anniversaries, including a welcome message on the first day
- Company-observed holidays

## Setup

- Clone the repository and run `npm install`.
- Ensure your [AWS credentials are available](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
- If you have access, generate a [BambooHR API key](https://www.bamboohr.com/api/documentation/) within your account. Otherwise, have a BambooHR admin at your company generate one for you.
- Determine the BambooHR subdomain associated with your company.
- Configure at least one [slack webohook](https://slack.com/apps/manage/custom-integrations).
- Once deployed, it will run from Monday to Friday at 7 a.m. UTC. This can be adjusted in `serverless.yml` file.

### Environment variables

The service needs the following env variables:

```
ENVIRONMENT=
AWS_ACCOUNT_ID=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
BAMBOOHR_SUBDOMAIN=
CELEBRATIONS_WEBHOOK_URL=
OFFICE_WEBHOOK_URL=
BANK_HOLIDAYS_WEBHOOK_URL=
TIME_OFF_OFFICE_CODE=
EMPLOYEE_COUNTRY_FILTER=
```

To run it locally, you can create an `.env` file. To deploy it in the cloud, you need to define them in the CI/CD pipeline, as they are read in the GitHub action that deploys it to AWS.

Apart from the env variables, it will read the `BAMBOOHR_KEY` secret from [AWS Secrets Manager](https://aws.amazon.com/es/secrets-manager/).

## Usage

### Deployment

In order to deploy the code, you need to run the following command:

```
$ serverless deploy
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
serverless invoke --function main
```

## Local development

First you need to create an `.env` file with the following variables:

```
ENVIRONMENT=local
AWS_ACCOUNT_ID=
BAMBOOHR_SUBDOMAIN=
CELEBRATIONS_WEBHOOK_URL=
OFFICE_WEBHOOK_URL=
BANK_HOLIDAYS_WEBHOOK_URL=
TIME_OFF_OFFICE_CODE=
EMPLOYEE_COUNTRY_FILTER=
AWS_ENDPOINT=http://localhost:4566 # Localstack
AWS_REGION=us-east-1 # Localstack
```

Apart from that, you need to create an `.env` file inside the `docker` folder with the following env variables:

```
BAMBOOHR_KEY=
```

And the run [localstack](https://localstack.cloud/) with an instance of AWS Secrets Manager by typing:

```bash
npm run infra:dev:start
```

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function main
```

When you're finished, remember to run:

```bash
npm run infra:dev:stop
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/inigomarquinez"><img src="https://avatars.githubusercontent.com/u/25435858?v=4?s=100" width="100px;" alt="Íñigo Marquínez Prado"/><br /><sub><b>Íñigo Marquínez Prado</b></sub></a><br /><a href="https://github.com/guidesmiths/bamboohrbot/issues?q=author%3Ainigomarquinez" title="Bug reports">🐛</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=inigomarquinez" title="Code">💻</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=inigomarquinez" title="Documentation">📖</a> <a href="#infra-inigomarquinez" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-inigomarquinez" title="Maintenance">🚧</a> <a href="https://github.com/guidesmiths/bamboohrbot/pulls?q=is%3Apr+reviewed-by%3Ainigomarquinez" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=inigomarquinez" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!