import { useEffect, useState } from "react";
import { getTopicsForHomepage } from "../Utils/api";

const NavBar = () => {

    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        getTopicsForHomepage().then((topics)=>{
            setTopics(topics)
        })
    }, [])

    return (
        <nav className="navbar">
            <ul>
                <li key="homepage">All Articles</li>
                {topics.map(({slug})=>{
                    return <li key={slug}>{slug}</li>
                })}
            </ul>

        </nav>
    )
};

export default NavBar;