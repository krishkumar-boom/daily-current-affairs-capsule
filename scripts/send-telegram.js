import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const filePath = "public/current-affairs.pdf";

async function sendPDF() {
  try {
    const url = `https://api.telegram.org/bot${token}/sendDocument`;

    const form = new FormData();
    form.append("chat_id", chatId);
    form.append("caption", "📚 Daily Current Affairs Capsule");
    form.append("document", fs.createReadStream(filePath));

    const response = await fetch(url, {
      method: "POST",
      body: form
    });

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Error:", error);
  }
}

sendPDF();
