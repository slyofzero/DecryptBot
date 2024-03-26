import { teleBot } from "@/index";
import { log } from "@/utils/handlers";
import { selectRegions } from "./selectRegions";
import { regionPricing } from "./regionPricing";
import { selectPlan } from "./selectPlan";

export function initiateCallbackQueries() {
  log("Bot callback queries up");

  teleBot.callbackQuery("select-regions", (ctx) => selectRegions(ctx));
  teleBot.callbackQuery(/select-region-/, (ctx) => regionPricing(ctx));
  teleBot.callbackQuery(/select-plan-/, (ctx) => selectPlan(ctx));
}
