import { useParams, Link  } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCommentsForArticle } from "../Utils/api";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";


const Comments = () => {

    const [comments, setComments] = useState([]);

    const { topic, id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [imPosting, setImPosting] = useState();

    useEffect(()=>{
        setIsLoading(true)
        getCommentsForArticle(id).then((comments)=>{
            // console.log(comments) 
            setComments(comments)
            setIsLoading((posting)=>{
                setImPosting(!posting)
            })
        }).catch((error)=>{
            console.log(error)
        })
    }, [imPosting])

    if(isLoading) return <p>Loading...</p>
    return (
        <div className="comments">
            <PostComment id={id} setImPosting={setImPosting}/>
            <ul>
                {comments.map((comment)=>{
                    return (
                        <li key={comment.comment_id} className="singlecomment">
                            <p>{comment.comment_id}</p>
                            <p>Author: {comment.author}</p>
                            <p>{comment.body}</p>
                            <p>Date written: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                            <DeleteComment author={comment.author} commentId={comment.comment_id}/>
                        </li>
                        
                    )
                })}
            </ul>
            <Link to={`/articles/${topic}/${id}`}><button type="button">Return to Article</button></Link> 
        </div>
    )
};

export default Comments;