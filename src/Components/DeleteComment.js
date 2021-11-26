import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../Context/UserContext";
import { deleteComment } from "../Utils/api";

const DeleteComment = ({author, commentId}) => {

    const { user } = useContext(UserContext)

    const [redirect, setRedirect] = useState(false);

    const handleClick = (commentId) => {
    deleteComment(commentId)
    setRedirect(true)      
    };
    const userNamesMatch = author === user.username

return (
    <div>
        {redirect && <Navigate to={`/articles`} />}
        {!!userNamesMatch ? <button onClick={()=>handleClick(commentId)}>Delete Your Comment</button> : ""}
    </div>
        )
    };

export default DeleteComment;