# bamboohrbot

<p align="center">
  <a href="https://github.com/onebeyond/bamboohrbot/actions/workflows/test.yml" target="_blank"><img src="https://github.com/onebeyond/bamboohrbot/actions/workflows/test.yml/badge.svg" alt="run-tests workflow" /></a>
  <a href="https://github.com/onebeyond/bamboohrbot/actions/workflows/main.yml" target="_blank"><img src="https://github.com/onebeyond/bamboohrbot/actions/workflows/main.yml/badge.svg" alt="deploy-to-aws workflow" /></a>
  <a href="https://codeclimate.com/github/onebeyond/bamboohrbot/maintainability"><img src="https://api.codeclimate.com/v1/badges/2cb9384daf04fc540596/maintainability" /></a>
  <a href="https://codeclimate.com/github/onebeyond/bamboohrbot/test_coverage"><img src="https://api.codeclimate.com/v1/badges/2cb9384daf04fc540596/test_coverage" /></a>
  <a href="https://img.shields.io/github/all-contributors/onebeyond/bamboohrbot?color=ee8449&style=flat-square" target="_blank"><img src="https://img.shields.io/github/all-contributors/onebeyond/bamboohrbot?color=ee8449&style=flat-square" alt="all-contributors" /></a>
</p>

🤖 Bot to publish BambooHR notifications to slack each weekday:

- Who's at the office
- Birthdays
- Work anniversaries, including a welcome message on the first day
- Company-observed holidays

## ⚙️ Setup

- Clone the repository and run `npm install`.
- Ensure your [AWS credentials are available](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
- If you have access, generate a [BambooHR API key](https://www.bamboohr.com/api/documentation/) within your account. Otherwise, have a BambooHR admin at your company generate one for you.
- Determine the BambooHR subdomain associated with your company.
- [Create a new app](https://api.slack.com/apps) on your slack organization, give it the `chat:write` and `chat:write.public` scopes, and [install it](https://api.slack.com/start/quickstart#installing) to your workspace.
- Once deployed, it will run from Monday to Friday at 7 a.m. UTC. This can be adjusted in `serverless.yml` file.

### Environment variables

The service needs the following env variables:

```
ENVIRONMENT=
AWS_ACCOUNT_ID=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
BAMBOOHR_SUBDOMAIN=
TIME_OFF_OFFICE_CODE=
EMPLOYEE_COUNTRY_FILTER=
CELEBRATIONS_CHANNEL_ID=
BANK_HOLIDAYS_CHANNEL_ID=
OFFICE_CHANNEL_ID=
```

To run it locally, you can create an `.env` file. To deploy it in the cloud, you need to define them in the CI/CD pipeline, as they are read in the GitHub action that deploys it to AWS.

Apart from the env variables, it will read the `BAMBOOHR_KEY`, `SLACK_SIGNING_SECRET`, `SLACK_BOT_TOKEN` secrets from [AWS Secrets Manager](https://aws.amazon.com/en/secrets-manager/).

## 🗒️ Usage

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

## 🏗️ Local development

First you need to create an `.env` file with the following variables:

```
ENVIRONMENT=local
AWS_ACCOUNT_ID=
BAMBOOHR_SUBDOMAIN=
TIME_OFF_OFFICE_CODE=
EMPLOYEE_COUNTRY_FILTER=
AWS_ENDPOINT=http://localhost:4566 # Localstack
AWS_REGION=us-east-1 # Localstack
CELEBRATIONS_CHANNEL_ID=
BANK_HOLIDAYS_CHANNEL_ID=
OFFICE_CHANNEL_ID=
```

Apart from that, you need to create an `.env` file inside the `docker` folder with the following env variables:

```
BAMBOOHR_KEY=
SLACK_SIGNING_SECRET=
SLACK_BOT_TOKEN=
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

## 🔗 Useful links

- [Slack Block Kit documentation](https://api.slack.com/block-kit)
- [Slack Block Kit builder](https://app.slack.com/block-kit-builder)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/inigomarquinez"><img src="https://avatars.githubusercontent.com/u/25435858?v=4?s=100" width="100px;" alt="Íñigo Marquínez Prado"/><br /><sub><b>Íñigo Marquínez Prado</b></sub></a><br /><a href="https://github.com/guidesmiths/bamboohrbot/issues?q=author%3Ainigomarquinez" title="Bug reports">🐛</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=inigomarquinez" title="Code">💻</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=inigomarquinez" title="Documentation">📖</a> <a href="#infra-inigomarquinez" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-inigomarquinez" title="Maintenance">🚧</a> <a href="https://github.com/guidesmiths/bamboohrbot/pulls?q=is%3Apr+reviewed-by%3Ainigomarquinez" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=inigomarquinez" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/totegsito"><img src="https://avatars.githubusercontent.com/u/12380342?v=4?s=100" width="100px;" alt="Fran Quesada"/><br /><sub><b>Fran Quesada</b></sub></a><br /><a href="https://github.com/guidesmiths/bamboohrbot/issues?q=author%3Atotegsito" title="Bug reports">🐛</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=totegsito" title="Code">💻</a> <a href="https://github.com/guidesmiths/bamboohrbot/commits?author=totegsito" title="Documentation">📖</a> <a href="#maintenance-totegsito" title="Maintenance">🚧</a> <a href="https://github.com/guidesmiths/bamboohrbot/pulls?q=is%3Apr+reviewed-by%3Atotegsito" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Betisman"><img src="https://avatars.githubusercontent.com/u/11455322?v=4?s=100" width="100px;" alt="Carlos Jiménez"/><br /><sub><b>Carlos Jiménez</b></sub></a><br /><a href="https://github.com/guidesmiths/bamboohrbot/pulls?q=is%3Apr+reviewed-by%3Abetisman" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/w3dani"><img src="https://avatars.githubusercontent.com/u/48931264?v=4?s=100" width="100px;" alt="w3dani"/><br /><sub><b>w3dani</b></sub></a><br /><a href="#infra-w3dani" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/guidesmiths/bamboohrbot/pulls?q=is%3Apr+reviewed-by%3Aw3dani" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
