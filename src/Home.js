import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')


    const filterBlogsByFirstLetter = (letter) => {
        if (blogs) {
            return blogs.filter((blog) => blog.author.charAt(0).toLowerCase() === letter.toLowerCase());
        }
        return [];
    };

    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));
    return (
        <div className="home">
            {isLoading && 
             <div className="loading-container">
             <div className="loading-spinner">
               <div className="spinner-inner"></div>
             </div>
            <div className="loading">Loading ...</div>
            </div>}
            {error && (
                <div className="error-container">
                    <div className="error-icon">
                    <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <div className="error-message">{error}</div>
                </div>
            )}
          {/* {blogs && <BlogList blogs={blogs} title="My Blogs" handleDelete={handleDelete} />} */}
          {alphabet.map((letter) => {
            const filteredBlogs = filterBlogsByFirstLetter(letter);
            if (filteredBlogs.length > 0){
            return (
                <BlogList 
                key={letter}
                blogs={filteredBlogs}
                title={`${letter} Blogs`}
                // handleDelete={handleDelete}
                />
                );
            }
            return null;
        })}

        </div>
    );
}
 
export default Home;