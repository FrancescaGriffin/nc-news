import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { postNewComment } from "../Utils/api";

const PostComment = ({id, addComment}) => {

    const { user } = useContext(UserContext)

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
        setShowButton(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewComment(id, newComment).then((newComment) =>{
            addComment(newComment)
        })
        setShowButton(true)
       
    };
    
    const commentForm = () => {
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
        );
    };

    return showButton ? ( 
    <div>
        {" "}
        <button onClick={()=>handleClick()} id="comment button">
            Post Comment
        </button>
    </div> 
    ) : (
        commentForm()
    )
};

export default PostComment;