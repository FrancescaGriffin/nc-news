import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext"
import { getAllUsers } from "../Utils/api";

const Users = () => {
    const { setUser } = useContext(UserContext)

    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        getAllUsers().then((users)=>{
            setAllUsers(users)
        })
    }, [])

    return (
        <div>
            <h3>Select User</h3>
            <ul>
                {allUsers.map((user)=>{
                    return (
                    <li key={user.username} className="Users">
                    <button onClick={()=>{setUser(user)}}>{user.username}</button> 
                    </li>
                    
                    )
                })}
            </ul>
        </div>

        )
};

export default Users;