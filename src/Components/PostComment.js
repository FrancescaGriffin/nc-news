import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { postNewComment } from "../Utils/api";

const PostComment = ({id, addComment}) => {

    const { user } = useContext(UserContext)

    const [showForm, setShowForm] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [newComment, setNewComment] = useState({ username: '', body: ''})

    const updateComment = (event) => {
        const { value } = event.target
        setNewComment(()=>{
            return {
                username: user.username,
                body: value
            }
        })
    };

    const handleClick = () => {
        setShowForm(true)
        setShowButton(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewComment(id, newComment).then((newComment) =>{
            addComment(newComment)
        })
        setShowButton(true)
       
    };
    
    const CommentForm = () => {
        return (
            <form onSubmit={handleSubmit} className="form">
                    <label>
                        <input
                            type="text"
                            name="new comment"
                            id="new comment"
                            onChange={updateComment}
                            value={newComment.body}
                            required
                             />
                    </label>
                <button type="submit">Submit Comment</button>
        </form>
        )
    }

    return ( showButton ? ( 
    <div>
        <button onClick={()=>handleClick()} id="comment button">
            Post Comment
        </button>
    </div> 
    ) : (
        <CommentForm />
    )
    )};

export default PostComment;