import { CallbackQueryContext, Context, InlineKeyboard } from "grammy";

export async function selectRegions(ctx: CallbackQueryContext<Context>) {
  ctx.deleteMessage();

  const text = `*Available Regions*: \`05\``;
  const keyboard = new InlineKeyboard()
    .text("Japan", "select-region-japan")
    .text("Europe", "select-region-europe")
    .row()
    .text("Asia", "select-region-asia")
    .text("Africa", "select-region-africa")
    .row()
    .text("Middle East", "select-region-middleEast")
    .row()
    .text("South America", "select-region-southAmerica")
    .row()
    .text("North America", "select-region-northAmerica");

  ctx.reply(text, { parse_mode: "MarkdownV2", reply_markup: keyboard });
}
