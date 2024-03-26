import { cleanUpBotMessage } from "@/utils/bot";
import { CommandContext, Context, InlineKeyboard, InputFile } from "grammy";

export async function startBot(ctx: CommandContext<Context>) {
  const text = `Welcome to \`$Decentralized Private Network\`. Our Telegram bot specializes in offering *GPU-Enabled AI Servers* for purchase. Discover a variety of *Geographical Regions* to choose from, all offered at *Competitive Prices*. Dive into the world of High-Speed DCP Servers today.`;

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
