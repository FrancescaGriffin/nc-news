import { useEffect, useState, useContext } from "react";
import { getTopicsForHomepage } from "../Utils/api";
import { Link } from "react-router-dom" 
import { UserContext } from '../Context/UserContext'

const NavBar = ({setSortBy}) => {
    
    const { isLoggedIn, user } = useContext(UserContext);
    
    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        getTopicsForHomepage().then((topic)=>{
            setTopics(topic)
        })
    }, [])

    return (
        <nav className="navbar">
            {isLoggedIn ? <p>Hello {user.username}!</p> : <p>Please login!</p>}
            <ul>
                <li key="homepage"><Link to={`/articles`}> All Articles </Link></li>
                {topics.map(({slug})=>{
                    return <li key={slug}><Link to={`/articles/${slug}`} onClick={()=>setSortBy("created_at")}> {slug} </Link></li>
                })}
            </ul>
        </nav>
    )
};

export default NavBar;