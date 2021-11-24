import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../Utils/api";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ArticleById = () => {

    const [article, setArticle] = useState([]);
    const { id } = useParams();
    
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true)
        getArticleById(id).then((article)=>{
            // console.log(article, "inside use effect")
            setArticle(article)
            setIsLoading(false)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])


    if(isLoading) return <p>Loading...</p>
    return (
        <article className="articleByID">
            <ul>
                <li>{article.article_id}</li>
                <li>{article.title}</li>
                <li>Author: {article.author}</li>
                <li>Topic:{article.topic}</li>
                <li>{article.body}</li>
                <li>Date submitted: {article.created_at}</li>
                <li>Votes: {article.votes}</li>
                <li>Comments: {article.comment_count}</li>
            </ul>
            <Link to={`/articles/${article.topic}/${article.article_id}/comments`}><button type="button">View Comments</button></Link> 
        </article>
    )
};

export default ArticleById;