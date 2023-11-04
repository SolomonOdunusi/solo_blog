import { Link } from "react-router-dom";

const Err404 = () => {
        return ( 
                <div className="notfound">
                <h2>Error 404</h2>
                <p>Page not found</p>
                <Link className="return" to="/">Return to homepage</Link>
                </div>
         );
}
 
export default Err404;