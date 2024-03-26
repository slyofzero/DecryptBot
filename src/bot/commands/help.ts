import { cleanUpBotMessage } from "@/utils/bot";
import { CommandContext, Context } from "grammy";

export async function help(ctx: CommandContext<Context>) {
  const text = `\`$DECRYPT\`! Our Telegram bot offers GPU-Powered AI Servers for purchase, available across diverse Geographical Regions and offered at Competitive Prices. Explore blazing-fast DECRYPT Servers with us.`;

  ctx.reply(cleanUpBotMessage(text), {
    parse_mode: "MarkdownV2",
  });
}
