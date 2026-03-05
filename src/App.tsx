import { useEffect, useState } from "react"

type News = {
  title: string
  summary: string
  source: string
  date: string
}

function App() {

  const [news,setNews] = useState<News[]>([])

  useEffect(()=>{

    fetch("/src/data/news.json")
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err))

  },[])

  return (

    <div style={{padding:"40px",fontFamily:"Arial"}}>

      <h1>Daily Current Affairs Capsule</h1>

      <p>Latest current affairs automatically updated daily.</p>

      {news.map((n,i)=>(
        <div key={i} style={{
          border:"1px solid #ddd",
          padding:"20px",
          marginBottom:"20px",
          borderRadius:"8px"
        }}>

          <h2>{n.title}</h2>

          <p>{n.summary}</p>

          <small>
            Source: {n.source} | Date: {n.date}
          </small>

        </div>
      ))}

    </div>

  )
}

export default App
