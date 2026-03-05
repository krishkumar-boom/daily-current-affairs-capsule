import fs from "fs";

const data = JSON.parse(fs.readFileSync("public/news.json", "utf8"));

const currentAffairs = data.map((item, index) => ({
id: index + 1,
title: item.title,
summary: item.summary,
source: item.source,
date: item.date
}));

fs.writeFileSync(
"public/current-affairs.json",
JSON.stringify(currentAffairs, null, 2)
);

console.log("Current affairs generated");
