import { useEffect, useState } from "react";

type News = {
  title: string;
  summary: string;
  source: string;
  date: string;
};

export default function App() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#0b0f19",
        minHeight: "100vh",
        padding: "20px"
      }}
    >

      <div
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <img
          src="/file_00000000e3c872088ffdade1b40ae755-1.jpg"
          width="120"
          style={{
            borderRadius: "50%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
          }}
        />

        <h1
          style={{
            marginTop: "10px",
            fontSize: "32px",
            fontWeight: "bold"
          }}
        >
          Daily Current Affairs Capsule
        </h1>

        <p style={{ color: "#666" }}>
          UPSC • NDA • Defence Exam Preparation
        </p>
      </div>


      <div
        style={{
          maxWidth: "800px",
          margin: "auto"
        }}
      >
        {news.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#111827",
color: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >

            <h2 style={{ marginBottom: "10px" }}>
              {item.title}
            </h2>

            <p style={{ color: "#d1d5db" }}>
              {item.summary}
            </p>

            <small style={{ color: "#9ca3af" }}>
              {item.source} | {item.date}
            </small>

          </div>
        ))}
      </div>

    </div>
  );
}
