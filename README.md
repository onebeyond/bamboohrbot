# bambot

🤖 Bot to publish BambooHR notifications (company holidays, work anniversaries, birthdays, and who is at the office) to slack each weekday.

- Who's at the office
- Birthdays
- Work anniversaries, including a welcome message on the first day
- Company-observed holidays

## Setup

- Clone the repository and run `npm install`.
- Ensure your [AWS credentials are available](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- If you have access, generate a [BambooHR API key](https://www.bamboohr.com/api/documentation/) within your account. Otherwise, have a BambooHR admin at your company generate one for you.
- Determine the BambooHR subdomain associated with your company.
- Configure at leaast one [slack webohook](https://slack.com/apps/manage/custom-integrations).
- Once deployed, it will run from Monday to Friday at 7 a.m. UTC. This can be adjusted in `serverless.yml` file.

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

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function main
```
