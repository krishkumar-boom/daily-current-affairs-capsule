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
    <div style={{
      fontFamily: "Arial",
      background: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px"
    }}>
      
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px"
      }}>
        Daily Current Affairs Capsule
      </h1>

      <div style={{
        maxWidth: "800px",
        margin: "auto"
      }}>
        {news.map((item, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            
            <h2 style={{marginBottom:"10px"}}>
              {item.title}
            </h2>

            <p style={{color:"#444"}}>
              {item.summary}
            </p>

            <small style={{color:"#888"}}>
              {item.source} | {item.date}
            </small>

          </div>
        ))}
      </div>
    </div>
  );
}
