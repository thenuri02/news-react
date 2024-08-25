import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const[articles, setArticles]= useState([]);

    useEffect(()=>
      {
        let url = `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
        //let url = `https://newsapi.org/v2/everything?country=ca&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
          .then(response => response.json())
          .then(data=> setArticles(data.articles))
          .catch(error => console.error('Error fetching news:', error));
      },[]) 

  return (
    <div>
        <h2 className="text-center text-light">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news, index)=>{
            return <NewsItem 
              key = {index} 
              title={news.title} 
              description={news.description} 
              src={news.urlToImage} 
              url={news.url} 
              date= {news.publishedAt} 
              sourceName= {news.sourceName} 
              author={news.author}
            />

        })}
    </div>
  )
}

export default NewsBoard
