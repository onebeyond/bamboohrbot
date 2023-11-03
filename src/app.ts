import { App, LogLevel } from '@slack/bolt';
import postMessage from './postMessage';

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
});

(async () => {
  await app.start(Number(process.env.PORT) || 3000);

  console.log('⚡️ Bolt app is running!');

  postMessage(app, 'C063UJJP91U', 'Hello World')
})();