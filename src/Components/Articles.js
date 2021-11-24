import { useState, useEffect } from "react";
import { getAllArticles } from "../Utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom" 


const Articles = () => {

    const [allArticles, setAllArticles] = useState([]);
    const { topic } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true)
        getAllArticles(topic).then(({articles})=>{
            setAllArticles(articles)
            setIsLoading(false)
        })
        .catch((error)=> {
            console.log(error)
        })
    }, [topic]);


    if(isLoading) return <p>Loading...</p>
    return (
        <main className="articles">
            <ul>
            {allArticles.map((article)=>{
                return (
                    <li key={article.article_id} className="singlearticle">
                        <p>{article.article_id}</p>
                        <h3><Link to={`/articles/${article.topic}/${article.article_id}`}>{article.title} </Link></h3>
                        <p> Author: {article.author}</p>
                        <p>Topic: {article.topic}</p>
                        <p>Date submitted: {article.created_at}</p>
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