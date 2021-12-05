import { UserContext } from '../Context/UserContext';
import { useContext } from "react";

const Header = () => {

const { isLoggedIn, user } = useContext(UserContext);

    return (
        
        <header className="header">
            <h1> THE EVERYDAY JOURNALIST</h1>
            {/* {isLoggedIn ? <p>Hello {user.username}</p> : <p></p>} */}
        </header>
    )
}

export default Header;