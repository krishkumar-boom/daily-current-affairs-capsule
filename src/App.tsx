import { useEffect, useState } from "react";

type News = {
  title: string;
  summary: string;
  source: string;
  date: string;
};

export default function App() {
  const [news, setNews] = useState<News[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

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

      {/* SEARCH BAR */}
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
            border: "none",
            outline: "none"
          }}
        />
      </div>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img
          src="/logo.jpg"
          width="120"
          style={{
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}
        />

        <h1 style={{ marginTop: "10px" }}>
          Daily Current Affairs Capsule
        </h1>

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

      {/* NEWS SECTION */}
      <div
        style={{
          maxWidth: "800px",
          margin: "auto"
        }}
      >

        {news
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (

            <div
              key={index}
              style={{
                background: "#111827",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
              }}
            >

              <h2 style={{ marginBottom: "10px" }}>
                {item.title}
              </h2>

              <p style={{ color: "#cbd5f5" }}>
                {item.summary}
              </p>

              <small style={{ color: "#94a3b8" }}>
                {item.source} | {item.date}
              </small>

            </div>

          ))}

      </div>

    </div>
  );
        }
