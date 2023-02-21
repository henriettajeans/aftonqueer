import { useEffect, useState } from "react";
import { INews } from "../models/INews";
import { getNews } from "../services/newsApi";

export const NewsLoading = () =>{

    const [news,setNews] = useState <INews[]>([]);
    useEffect(() =>{
  
    const showNews = async () =>{
  
     let  newsFromApi =  await getNews();
  
    setNews([{ title: "ABC", description: "ABC", published:"abc", author:"hanapee"}]);
    
    }
   if(news.length > 0) return;
     showNews();
    });
  
  let html = news.map(() =>{
  
    return(<div className='news-container'>
        console.log(showNews);
    </div>)
  });
  
    return(<>
     
     {html}
  
    </>)
  }