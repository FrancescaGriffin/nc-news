import { useState, useEffect } from "react";
import { getAllArticles } from "../Utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom" 
import SortBy from "./SortBy";


const Articles = ({sortBy, setSortBy}) => {

    const [allArticles, setAllArticles] = useState([]);
    const { topic } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true)
        getAllArticles(topic, sortBy).then(({articles})=>{
            setAllArticles(articles)
            setIsLoading(false)
        })
        .catch((error)=> {
            console.log(error)
        })
    }, [topic, sortBy]);


    if(isLoading) return <p>Loading...</p>
    return (
        <main className="articles">
            <SortBy setSortBy={setSortBy}/>
            <ul>
            {allArticles.map((article)=>{
                return (
                    <li key={article.article_id} className="singlearticle">
                        {/* <p>{article.article_id}</p> */}
                        <h3><Link to={`/articles/${article.topic}/${article.article_id}`}>{article.title} </Link></h3>
                        <p className="author">Author: {article.author}</p>
                        <p className="topic">Topic: {article.topic}</p>
                        <p className="createdAt">Date submitted: {article.created_at}</p>
                        <p className="votes">Votes: {article.votes}</p>
                        <p className="commentCounts">Comments: {article.comment_count}</p>
                    </li>
                    )
                })}
            </ul>
        </main>
    )
};

export default Articles;