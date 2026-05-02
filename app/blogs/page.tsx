import { getBlogs } from "../services/blogs";
import Link from "next/link";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Blogs = async ({ searchParams }: Props) => {
  const { q } = (await searchParams) ?? {};
  const query = typeof q === "string" ? q : "";

  const blogs = await getBlogs();
 /*  const filtered = blogs
    .filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => b.likes - a.likes); */

  return (
    <div>
      <h2>Blogs</h2>
      <form method="GET">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search by title..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.author} - <a href={blog.url}>{blog.title}</a> ({blog.likes} likes)
            <Link href={`/blogs/${blog.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blogs;