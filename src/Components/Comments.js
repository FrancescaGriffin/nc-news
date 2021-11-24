import { useParams, Link  } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../Utils/api";


const Comments = () => {

    const [comments, setComments] = useState([]);

    const { topic, id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
        getCommentsForArticle(id).then((comments)=>{
            // console.log(comments)
            setComments(comments)
            setIsLoading(false)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

    if(isLoading) return <p>Loading...</p>
    return (
        <div className="comments">
            <ul>
                {comments.map((comment)=>{
                    return (
                        <li key={comment.comment_id} className="singlecomment">
                            <p>{comment.comment_id}</p>
                            <p>Author: {comment.author}</p>
                            <p>{comment.body}</p>
                            <p>Date written: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                        </li>
                        
                    )
                })}
            </ul>
            <Link to={`/articles/${topic}/${id}`}><button type="button">Return to Article</button></Link> 
        </div>
    )
};

export default Comments;