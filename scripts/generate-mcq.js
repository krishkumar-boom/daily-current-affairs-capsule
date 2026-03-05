import fs from "fs";

const news = JSON.parse(fs.readFileSync("src/data/news.json"));

const mcqs = news.map((item, index) => ({
  question: `Which news event is described: ${item.title}?`,
  options: [
    "Political development",
    "Economic policy",
    "International relations",
    "Social issue"
  ],
  answer: "Political development"
}));

fs.writeFileSync("src/data/mcq.json", JSON.stringify(mcqs, null, 2));

console.log("MCQ generated");
