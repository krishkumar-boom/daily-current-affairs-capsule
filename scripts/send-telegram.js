import fs from "fs";
import fetch from "node-fetch";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const filePath = "public/current-affairs.pdf";

async function sendPDF() {
  const url = `https://api.telegram.org/bot${token}/sendDocument`;

  const formData = new FormData();
  formData.append("chat_id", chatId);
  formData.append("document", fs.createReadStream(filePath));
  formData.append("caption", "📚 Daily Current Affairs Capsule");

  const res = await fetch(url, {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  console.log(data);
}

sendPDF();
