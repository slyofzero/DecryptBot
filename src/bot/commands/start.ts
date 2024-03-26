import { cleanUpBotMessage } from "@/utils/bot";
import { CommandContext, Context, InlineKeyboard, InputFile } from "grammy";

export async function startBot(ctx: CommandContext<Context>) {
  const text = `Step into the realm of \`$Decentralized Private Network\`. Our Telegram bot is your gateway to accessing GPU-Enabled AI Servers for purchase. Explore a diverse range of *Geographical Regions*, each boasting *Competitive Prices*. Immerse yourself in the realm of *High-Speed DCP Servers* today.`;

  const startImage = new InputFile("./src/images/start.jpeg");
  const keyboard = new InlineKeyboard().text(
    "Select Desired Regions 🌐",
    "select-regions"
  );
  // .row()
  // .url("🪩 Website 🪩", "https://decrypt.sbs/")
  // .url("Telegram", "https://t.me/DecryptErc")
  // .url("Twitter", "https://twitter.com/DECRYPTErc");

  ctx.replyWithPhoto(startImage, {
    caption: cleanUpBotMessage(text),
    reply_markup: keyboard,
    parse_mode: "MarkdownV2",
  });
}
