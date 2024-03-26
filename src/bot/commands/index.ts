import { teleBot } from "@/index";
import { startBot } from "./start";
import { log } from "@/utils/handlers";
import { selectRegions } from "../actions/selectRegions";
import { help } from "./help";

export function initiateBotCommands() {
  teleBot.api.setMyCommands([
    { command: "start", description: "Start using the bot" },
    { command: "regions", description: "View server regions" },
    { command: "help", description: "Get help" },
  ]);

  teleBot.command("start", (ctx) => startBot(ctx));
  teleBot.command("regions", (ctx) => selectRegions(ctx));
  teleBot.command("help", (ctx) => help(ctx));

  log("Bot commands up");
}
