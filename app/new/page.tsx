import { createBlog } from "./../actions/blog";

export default function NewBlog(){
    return (
        <div>
            <h1>Create a New Blog</h1>
            <form action={createBlog}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" />
                </div>
                <div>
                    <label htmlFor="url">URL:</label>
                    <input type="text" id="url" name="url" />
                </div>

                <button type="submit">Create Blog</button>
            </form>
        </div>
    )   
}