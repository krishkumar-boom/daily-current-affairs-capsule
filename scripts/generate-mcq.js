import fs from "fs";

const news = JSON.parse(fs.readFileSync("public/news.json", "utf8"));

let mcq = [];

news.slice(0,5).forEach((item, index) => {

mcq.push({
question: `Question ${index+1}: ${item.title} is related to which topic?`,
options: ["A. Economy","B. International Relations","C. Science & Tech","D. Environment"],
answer: "A"
})

})

fs.writeFileSync("public/mcq.json", JSON.stringify(mcq,null,2));

console.log("MCQ generated");
