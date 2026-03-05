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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Daily Current Affairs Capsule</h1>

      {news.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <small>
            {item.source} | {item.date}
          </small>
        </div>
      ))}
    </div>
  );
}
