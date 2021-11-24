import { useState, useEffect } from "react";
import { getAllArticles } from "../Utils/api";
import { useParams } from "react-router-dom";


const Articles = () => {

    const [allArticles, setAllArticles] = useState([]);
    const { topic } = useParams;

    useEffect(()=> {
        getAllArticles(topic).then(({articles})=>{
            setAllArticles(articles)
        })
        .catch((error)=> {
            console.log(error)
        })
    }, []);



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