import fs from "fs";
import fetch from "node-fetch";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

const mcq = JSON.parse(fs.readFileSync("public/mcq.json","utf8"));

async function sendPoll(){

for (let q of mcq){

const url = `https://api.telegram.org/bot${token}/sendPoll`;

await fetch(url,{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
chat_id:chatId,
question:q.question,
options:q.options,
type:"quiz",
correct_option_id:0
})
})

}

}

sendPoll();
