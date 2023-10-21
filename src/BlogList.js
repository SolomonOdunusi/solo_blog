import { Link } from 'react-router-dom';
const BlogList = ({blogs, title}) => {

    return ( 
        <div className="bloglist">
            <h2 className="title">{title}</h2>
              { blogs.map((blog) => (
                <div className="blog_preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <h5>Written by { blog.author }</h5>
                    </Link>
                    <div className="box">
                        {/* <button onClick={() => handleDelete(blog.id)} className="delete">Delete</button> */}
                    </div>
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;