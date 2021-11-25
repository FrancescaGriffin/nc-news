import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const User = () => {
    const { setUser } = useContext(UserContext)
    return <p>Users</p>
};

export default User;