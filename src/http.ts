import axios from "axios";

import { TSlackMessage } from ".";

export async function postSlackMessage(url: string, msg: TSlackMessage): Promise<void> {
  if (!msg.text) return Promise.resolve();

  try {
    await axios.post(url, JSON.stringify(msg));
  } catch (error) {
    // tslint:disable-next-line
    console.error(error);
  }
}
