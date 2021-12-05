import { useState } from "react";
import { votesForArticle } from "../Utils/api";

const NewVotes = ({id , articleVotes}) => {
    
    const [userVote, setUserVote] = useState(0);

    const [likeDisabled, setLikeDisabled] = useState()
    const [DislikeDisabled, setDislikeDisabled] = useState()

    const handleClick = (number) => {
        if(number === 1) {
            setLikeDisabled(true)
        } else {
        setDislikeDisabled(true)
        }
        setUserVote((currentNum)=>currentNum + number);
        votesForArticle(id, number).catch((error)=>{console.dir(error)})
    };

return (
    <>
    <p>Votes: {articleVotes + userVote}</p>
    <button onClick={()=>handleClick(1)} disabled={likeDisabled}> Like </button>
    <button onClick={()=>handleClick(-1)} disabled={DislikeDisabled}> Dislike </button>
    </>
)
};

export default NewVotes;