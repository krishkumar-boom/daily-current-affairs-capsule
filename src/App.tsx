import { useEffect, useState } from "react";

type News = {
title: string;
summary: string;
source: string;
date: string;
category: string;
};

export default function App() {
const [news, setNews] = useState<News[]>([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

useEffect(() => {
fetch("/news.json")
.then((res) => res.json())
.then((data) => setNews(data));
}, []);

const categories = ["All", "Polity", "Economy", "International", "Defence"];

const filteredNews = news.filter((item) => {
const matchCategory = category === "All" || item.category === category;
const matchSearch =
item.title.toLowerCase().includes(search.toLowerCase()) ||
item.summary.toLowerCase().includes(search.toLowerCase());

return matchCategory && matchSearch;

});

return (
<div
style={{
fontFamily: "Arial",
background: "#0b1220",
minHeight: "100vh",
padding: "20px",
color: "white"
}}
>
{/* HEADER */}
<div style={{ textAlign: "center", marginBottom: "30px" }}>
<img src="/logo.jpg" width="120" />

    <h1 style={{ marginTop: "10px" }}>Daily Current Affairs Capsule</h1>

    <p style={{ color: "#94a3b8" }}>
      UPSC • NDA • Defence Exam Preparation
    </p>

    {/* TELEGRAM BUTTONS */}
    <div style={{ marginTop: "15px" }}>
      <a
        href="https://t.me/upscNDAwithKRISH"
        target="_blank"
        style={{
          display: "inline-block",
          marginRight: "10px",
          padding: "10px 20px",
          background: "#229ED9",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        Join UPSC NDA Channel
      </a>

      <a
        href="https://t.me/dailycurrentaffairscapsule"
        target="_blank"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#22c55e",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
      >
        Join Current Affairs Channel
      </a>
    </div>
  </div>

  {/* SEARCH */}
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    <input
      type="text"
      placeholder="Search current affairs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "10px",
        width: "60%",
        borderRadius: "8px",
        border: "none"
      }}
    />
  </div>

  {/* CATEGORY FILTER */}
  <div style={{ textAlign: "center", marginBottom: "20px" }}>
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        style={{
          margin: "5px",
          padding: "8px 15px",
          borderRadius: "6px",
          border: "none",
          background: category === cat ? "#2563eb" : "#1e293b",
          color: "white",
          cursor: "pointer"
        }}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* NEWS LIST */}
  <div style={{ maxWidth: "800px", margin: "auto" }}>
    {filteredNews.map((item, index) => (
      <div
        key={index}
        style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}
      >
        <h3>{item.title}</h3>

        <p style={{ color: "#cbd5f5" }}>{item.summary}</p>

        <small style={{ color: "#9ca3af" }}>
          {item.source} | {item.date} | {item.category}
        </small>
      </div>
    ))}
  </div>
</div>

);
}
