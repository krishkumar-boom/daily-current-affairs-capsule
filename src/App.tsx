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
    fetch("/src/data/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Daily Current Affairs Capsule</h1>

      {news.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{item.title}</h2>

          <p>{item.summary}</p>

          <small>
            {item.source} | {item.date}
          </small>
        </div>
      ))}
    </div>
  );
      }
