const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title: </label>
                <input type="text" required placeholder="Title"/>

                <label>Blog: </label>
                <textarea required placeholder="Blog"></textarea>

                <label>Blog Author: </label>
                <input type="text" required placeholder="Author"/>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;