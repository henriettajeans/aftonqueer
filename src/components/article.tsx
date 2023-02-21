/* eslint-disable no-template-curly-in-string */

import React, { useState } from "react";
import '../styling/articles.scss'

interface IArticle{
    id:string;
    title: string;
    text: string;
    byline: string;

}

export const Article=(props: IArticle)=>{
    const [count, setCount] = useState(0)

    const author =()=>{
        console.log("Author")
    }
    return(
        <section className="articles">
            <h3 className="articles__title">{props.title}</h3>
            <p className="articles__text">{props.text}</p>
            <h6 className="articles__byline" onClick={author}>{props.byline}</h6>
            <button className="articles__like" onClick={()=>setCount(count + 1)}>
            {/* {count === 0 ? "Klicka för att gilla" : "gillamarkering"} */}
                {(() => {
                    if (count === 0){
                        return "Tryck för att gilla";
                    }
                    else  {
                        if(count=== 1){
                            return `${count} gillamarkering`;
                        }
                        else{
                            return `${count} gillamarkeringar`;
                        }
                        
                    }
                })()            }
            </button>
        </section>
    )
}

export default Article;