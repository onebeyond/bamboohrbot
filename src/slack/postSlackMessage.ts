import { type App } from '@slack/bolt';

import { type TSlackMessage } from '..';

export async function postSlackMessage(
  app: App,
  channelId: string,
  message: TSlackMessage
): Promise<void> {
  if (message.blocks.length === 0) return;

  try {
    await app.client.chat.postMessage({
      channel: channelId,
      text: message.text,
      blocks: message.blocks,
    });
  } catch (error) {
    console.error(error);
  }
}
