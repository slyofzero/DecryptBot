import { Bot } from "grammy";
import { initiateBotCommands, initiateCallbackQueries } from "./bot";
import { log } from "./utils/handlers";
import { BOT_TOKEN } from "./utils/env";
import { getEthPrice } from "./vars/ethPrice";

export const teleBot = new Bot(BOT_TOKEN || "");
log("Bot instance ready");

// Check for new transfers at every 20 seconds
const interval = 20;

(async function () {
  teleBot.start();
  await getEthPrice();
  log("Telegram bot setup");
  initiateBotCommands();
  initiateCallbackQueries();

  async function toRepeat() {
    //
    setTimeout(toRepeat, interval * 1e3);
  }
  await toRepeat();

  setInterval(() => {
    getEthPrice();
  }, 60 * 1e3);
})();
