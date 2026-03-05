import fs from "fs";

const news = JSON.parse(fs.readFileSync("public/news.json", "utf8"));

const currentAffairs = news.map((item) => {
return {
title: item.title,
summary: item.summary,
source: item.source,
date: item.date,
category: "General"
};
});

fs.writeFileSync(
"public/current-affairs.json",
JSON.stringify(currentAffairs, null, 2)
);

console.log("Current affairs generated successfully");
