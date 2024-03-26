import { CallbackQueryContext, Context, InlineKeyboard } from "grammy";
import { pricingList, textJoiner } from "../pricing";
import { toTitleCase } from "@/utils/general";

export async function regionPricing(ctx: CallbackQueryContext<Context>) {
  ctx.deleteMessage();
  const region = ctx.callbackQuery.data.replace("select-region-", "");

  const regionPricingData = pricingList[region];
  const pricingText = regionPricingData
    .map((data) => {
      const text = `*NAME:* ${toTitleCase(data.name)}
*RAM:* ${data.ram} GB
*STORAGE:* ${data.storage} SSD
*COST:* $${data.cost}/month
*UPTIME:* ${data.uptime}%
*SUPPORT:* ${data.support}`;

      return text;
    })
    .join(textJoiner);

  const text = `🚀🚀 Select the desire plan:\n\n${pricingText}${textJoiner}`;

  const keyboard = new InlineKeyboard()
    .text("🧩 SELECT PLAN 🧩")
    .row()
    .text("Basic")
    .text("🟦", `select-plan-${region}-basic`)
    .row()
    .text("Standard")
    .text("🟦", `select-plan-${region}-standard`)
    .row()
    .text("Premium")
    .text("🟦", `select-plan-${region}-premium`)
    .row()
    .text("Advanced")
    .text("🟦", `select-plan-${region}-advanced`)
    .row()
    .text("Enterprise")
    .text("🟦", `select-plan-${region}-enterprise`)
    .row()
    .text("Ultra")
    .text("🟦", `select-plan-${region}-ultra`);

  ctx.reply(text, { parse_mode: "Markdown", reply_markup: keyboard });
}
