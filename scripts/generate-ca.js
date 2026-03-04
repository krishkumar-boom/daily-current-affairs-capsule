const fs = require("fs");

const news = JSON.parse(fs.readFileSync("src/news.json"));

const result = news.map((item, i) => {
  return {
    title: item.title,
    explanation: "This news is important for UPSC/NDA exams.",
    exam_relevance: "Can be asked in current affairs section.",
    mcq: {
      question: `What is related to: ${item.title}?`,
      options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      answer: "Option A"
    }
  };
});

fs.writeFileSync("src/current_affairs.json", JSON.stringify(result, null, 2));

console.log("Current affairs generated!");
