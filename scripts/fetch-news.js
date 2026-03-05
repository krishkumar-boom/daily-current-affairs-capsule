import fs from "fs";
import Parser from "rss-parser";

const parser = new Parser();

function detectCategory(title) {
const t = title.toLowerCase();

if (t.includes("defence") || t.includes("military") || t.includes("army") || t.includes("navy") || t.includes("air force")) {
return "Defence";
}

if (t.includes("economy") || t.includes("gdp") || t.includes("inflation") || t.includes("budget") || t.includes("bank")) {
return "Economy";
}

if (t.includes("india") || t.includes("government") || t.includes("parliament") || t.includes("supreme court") || t.includes("minister")) {
return "Polity";
}

if (t.includes("china") || t.includes("usa") || t.includes("russia") || t.includes("united nations") || t.includes("international")) {
return "International";
}

return "General";
}

async function fetchNews() {
const feed = await parser.parseURL(
"https://www.thehindu.com/news/national/feeder/default.rss"
);

const articles = feed.items.slice(0, 8).map((item) => ({
title: item.title,
summary: item.contentSnippet || "",
source: "The Hindu",
date: new Date().toISOString().split("T")[0],
category: detectCategory(item.title)
}));

console.log("Fetched Articles:", articles);

fs.writeFileSync("public/news.json", JSON.stringify(articles, null, 2));
}

fetchNews();
