import fs from "fs";
import fetch from "node-fetch";
import FormData from "form-data";

const token = process.env.8536333961:AAFjVn41UGFiYIaWpE0Z-EFHUCUExj8eRtU;
const chatId = process.env.1003516899090;

const filePath = "public/current-affairs.pdf";

async function sendPDF() {
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
}

sendPDF();
