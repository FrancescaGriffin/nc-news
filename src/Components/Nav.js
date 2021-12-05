import { useEffect, useState, useContext } from "react";
import { getTopicsForHomepage } from "../Utils/api";
import { Link } from "react-router-dom" 
import { UserContext } from '../Context/UserContext'

const NavBar = ({setSortBy}) => {
    
    const { user } = useContext(UserContext);
    
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        setIsLoading(true)
        getTopicsForHomepage().then((topic)=>{
            setTopics(topic)
            setIsLoading(false)
        })
    }, [])
    
    if(isLoading) return <p>Loading...</p>
    return (
        <nav className="navbar">
            <ul>
                <li key="homepage"><Link to={`/articles`} className="nav"> All articles </Link></li>
                {topics.map(({slug})=>{
                    return <li key={slug}><Link to={`/articles/${slug}`} className="nav" onClick={()=>setSortBy("created_at")}> {slug} </Link></li>
                })}
            </ul>
        </nav>
    )
};

export default NavBar;