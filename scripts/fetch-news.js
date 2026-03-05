import fs from "fs";
import Parser from "rss-parser";

const parser = new Parser();

async function fetchNews() {

const feed = await parser.parseURL("https://www.thehindu.com/news/national/feeder/default.rss");

const articles = feed.items.slice(0, 5).map(item => ({
  title: item.title,
  summary: item.contentSnippet,
  source: "The Hindu",
  date: new Date().toISOString().split("T")[0]
}));

console.log(articles);   // 👈 ye line add karo

fs.writeFileSync("public/news.json",
JSON.stringify(articles, null, 2));

}

fetchNews();
