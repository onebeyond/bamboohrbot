import { type App } from "@slack/bolt";

export default async (app: App, channelId: string, message: string) => {
  try {
    const result = await app.client.chat.postMessage({
      channel: channelId,
      text: message
    });

    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
}