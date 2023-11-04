import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(''); // default value
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false); // for conditional rendering
    const history = useHistory(); // for redirecting the user

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        const blog = { title, body, author }; // create a blog object

        setIsPending(true); // conditional rendering it is true bcs we are waiting for the post request to finish

        // post request to json-server
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" }, // tell the server we are sending json data
            body: JSON.stringify(blog) // convert blog object to json string
        }).then(() => { // then() is a promise
            console.log('new blog added');
            setTimeout(() => {
            setIsPending(false); // conditional rendering it is false bcs the post request is finished
            }, 1000)
            history.push('/'); // redirect the user to the home page
        })
    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input type="text" required 
                    placeholder="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // update the title state
                />

                <label>Blog: </label>
                <textarea required placeholder="Blog"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author: </label>
                <input type="text" required placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button className='addBlogLoading' disabled>Adding Blog_ _</button>}

            </form>
        </div>
    );
}
 
export default Create;