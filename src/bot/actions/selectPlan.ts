import { CallbackQueryContext, Context } from "grammy";
import { pricingList } from "../pricing";
import { generateRandomID, toTitleCase } from "@/utils/general";
import { ethPrice } from "@/vars/ethPrice";
import { cleanUpBotMessage } from "@/utils/bot";

export async function selectPlan(ctx: CallbackQueryContext<Context>) {
  ctx.deleteMessage();
  const [region, plan] = ctx.callbackQuery.data
    .replace("select-plan-", "")
    .split("-");

  const regionPlans = pricingList[region];

  const selectedPlan = regionPlans.find(({ name }) => name === plan);

  if (!selectedPlan) {
    return false;
  }

  const priceInEth = (selectedPlan.cost / ethPrice).toFixed(6);

  const text = `✅ Order generated successfully.

  Order ID: ${generateRandomID()}
  Plan: ${toTitleCase(plan)}

  Payment Method: ETHEREUM
  Address: \`0x6cA3Cc89d26d4E1f5b0Cd84B6721ef979Cb61be2\`
  Payment Amount: \`${priceInEth}\` ETH \\($${selectedPlan.cost}/month\\)
  Payment Status: Unpaid
  
  ⚠️ Please send the exact required amount to payment address. Order will expired after 60 minutes.
  
  🔆 You will get notified automatically once we received the payment.`;

  ctx.reply(cleanUpBotMessage(text), { parse_mode: "MarkdownV2" });
}
