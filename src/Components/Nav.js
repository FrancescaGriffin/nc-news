import { useEffect, useState } from "react";
import { getTopicsForHomepage } from "../Utils/api";
import { Link } from "react-router-dom" 

const NavBar = () => {

    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        getTopicsForHomepage().then((topic)=>{
            setTopics(topic)
        })
    }, [])

    return (
        <nav className="navbar">
            <ul>
                <li key="homepage"><Link to={`/articles`}> All Articles </Link></li>
                {topics.map(({slug})=>{
                    return <li key={slug}><Link to={`/articles/${slug}`}> {slug} </Link></li>
                })}
            </ul>
        </nav>
    )
};

export default NavBar;