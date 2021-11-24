import { useState } from "react";
import { votesForArticle } from "../Utils/api";

const NewVotes = ({id , articleVotes}) => {
    console.log(id, articleVotes)

    const [userVote, setUserVote] = useState(0);

    const handleClick = (number) => {
        setUserVote((currentNum)=>currentNum + number);
        votesForArticle(id, number).catch((error)=>{console.dir(error)})
    };

console.log(userVote)

return (
    <>
    <p>Votes: {articleVotes + userVote}</p>
    <button onClick={()=>handleClick(1)}> Like </button>
    <button onClick={()=>handleClick(-1)}> Dislike </button>
    </>
)
};

export default NewVotes;