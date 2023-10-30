import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetail = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('blog deleted');
            history.push('/');
        })
    }
    
    return (
        <div className="blog-detail">
            {/* { isPending && <div>Loading...</div>} */}
            {isLoading && 
             <div className="loading-container">
             <div className="loading-spinner">
               <div className="spinner-inner"></div>
             </div>
            <div className="loading">Loading ...</div>
            </div>}
            {error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                        <h5>Written by { blog.author }</h5>
                        <p>{ blog.body }</p>
                        <button onClick={handleClick} className="Delete">Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetail;