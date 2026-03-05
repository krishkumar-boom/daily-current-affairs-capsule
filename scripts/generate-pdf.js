import fs from "fs";

const news = JSON.parse(fs.readFileSync("src/data/news.json"));
const mcq = JSON.parse(fs.readFileSync("src/data/mcq.json"));

let content = "DAILY CURRENT AFFAIRS\n\n";

news.forEach((n, i) => {
  content += `News ${i+1}: ${n.title}\n`;
  content += `${n.summary}\n\n`;
});

content += "\nMCQ QUESTIONS\n\n";

mcq.forEach((q, i) => {
  content += `Q${i+1}: ${q.question}\n`;
  q.options.forEach((o, j) => {
    content += `${String.fromCharCode(65+j)}. ${o}\n`;
  });
  content += `Answer: ${q.answer}\n\n`;
});

fs.writeFileSync("daily-current-affairs.txt", content);

console.log("PDF content generated");
