import { teleBot } from "@/index";
import { log } from "@/utils/handlers";
import { selectRegions } from "./selectRegions";

export function initiateCallbackQueries() {
  log("Bot callback queries up");

  teleBot.callbackQuery("select-regions", (ctx) => selectRegions(ctx));
  teleBot.callbackQuery(/select-region-/, (ctx) => {
    const region = ctx.callbackQuery.data.replace("select-region-", "");
    console.log(region);
  });
}
