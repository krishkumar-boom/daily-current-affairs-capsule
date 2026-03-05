import fs from "fs";
import fetch from "node-fetch";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const mcq = JSON.parse(fs.readFileSync("public/mcq.json","utf8"));

let message = "📊 DAILY CURRENT AFFAIRS QUIZ\n\n";

mcq.forEach((q,i)=>{
message += `${i+1}. ${q.question}\n`;
message += `${q.options.join("\n")}\n`;
message += `✅ Answer: ${q.answer}\n\n`;
});

async function sendMCQ(){

const url = `https://api.telegram.org/bot${token}/sendMessage`;

await fetch(url,{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
chat_id:chatId,
text:message
})
})

}

sendMCQ();
