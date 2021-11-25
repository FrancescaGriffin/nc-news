import { useContext } from "react";
import { UserContext } from "../Context/UserContext"
import Users from "./Users";

const AreYouLoggedIn = ({children}) => {
const { isLoggedIn } = useContext(UserContext)

return isLoggedIn ? children : <Users />
};

export default AreYouLoggedIn;