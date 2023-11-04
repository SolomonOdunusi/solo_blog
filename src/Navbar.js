import { Link } from "react-router-dom/cjs/react-router-dom.min";
import zolo from "./zolo.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={zolo} alt="zolo" className="zolo" />
            <Link to="/"><h1>Solo Blog</h1></Link>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;