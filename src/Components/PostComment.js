import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { postNewComment } from "../Utils/api";

const PostComment = ({id}) => {

    const { user } = useContext(UserContext)

    const [showForm, setShowForm] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [comment, setComment] = useState("")
    const [newComment, setNewComment] = useState({ username: '', body: ''})

    const postComment = (event) => {
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
        postNewComment(id, newComment)
        setShowForm(false)
        setShowButton(true)
    };
    
console.log(newComment)
    const commentForm = () => {
        return (
            <form onSubmit={handleSubmit} className="form">
                    <label>
                         Comment: 
                        <input
                            type="text"
                            name="new comment"
                            id="new comment"
                            onChange={postComment}
                            value={newComment.body}
                            required
                             />
                    </label>
                <button type="submit">Submit Comment</button>
        </form>
        )
    }

    return (
        <div>
        {!!showButton && <button onClick={()=>handleClick()} id="comment button">Post Comment</button>}
        {!!showForm && commentForm()}
        
        </div>
    )
};

export default PostComment;