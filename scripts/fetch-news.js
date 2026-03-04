import fs from "fs";
import Parser from "rss-parser";

const parser = new Parser();

async function fetchNews() {
  const feed = await parser.parseURL("https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3");

  const articles = feed.items.slice(0, 5).map(item => ({
    title: item.title,
    summary: item.contentSnippet,
    source: "PIB",
    date: new Date().toISOString().split("T")[0]
  }));

  fs.writeFileSync(
    "./src/data/news.json",
    JSON.stringify(articles, null, 2)
  );
}

fetchNews();
