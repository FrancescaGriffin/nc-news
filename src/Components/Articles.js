import { useState, useEffect } from "react";
import { getAllArticles } from "../Utils/api";

const Articles = () => {

    const [allArticles, setAllArticles] = useState([]);

    useEffect(()=> {
        getAllArticles().then(({articles})=>{
            setAllArticles(articles)
        })
    }, [])



    return (
        <main className="articles">
            <ul>
            {allArticles.map((article)=>{
                return (
                    <li key={article.article_id} className="singlearticle">
                        <p>{article.article_id}</p>
                        <h3>{article.title}.</h3>
                        <p> Author: {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        <p>Created: {article.created_at}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Comments: {article.comment_count}</p>
                    </li>
            )
            })}
            </ul>
        </main>
    )
};

export default Articles;