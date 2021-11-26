import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { deleteComment } from "../Utils/api";

const DeleteComment = ({author, commentId}) => {

    const { user } = useContext(UserContext)

    const handleClick = (commentId) => {
    deleteComment(commentId)        
    }

    const userNamesMatch = author === user.username

return (
    <div>
        {!!userNamesMatch ? <button onClick={()=>handleClick(commentId)}>Delete Your Comment</button> : ""}
    </div>
        )
    };

export default DeleteComment;