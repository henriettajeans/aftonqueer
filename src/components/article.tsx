
import React from "react";
import '../styling/articles.scss'

interface IArticle{
    title: string;
    text: string;
    byline: string;

}

export const Article=(props: IArticle)=>{

    const author =()=>{
        console.log("Author")
    }
    return(
        <section className="articles">
            <h3 className="articles__title">{props.title}</h3>
            <p className="articles__text">{props.text}</p>
            <h6 className="articles__byline" onClick={author}>{props.byline}</h6>
        </section>
    );
}

export default Article;