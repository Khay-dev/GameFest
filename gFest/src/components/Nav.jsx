import { Link} from "react-router-dom";
import "./Nav.css";
const Nav = () => {

    return (
        <nav>
            <div className="nav-holder-1">
                <Link to="/" className="logo">
                    <div className="logo"> G A M E S F E S T </div>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
