import { eq } from "drizzle-orm"
import { db } from "./../db"
import { blogs } from "../../db/schema"




export type Blog = {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
};

export type NewBlog = Omit<Blog, "id">;

/* const blogs: Blog[] = [
  {
    id: 1,
    title: "React Server Components",
    author: "John Doe",
    url: "https://example.com/nextjs-react-server-components",
    likes: 7,
  },
  {
    id: 2,
    title: "Next.js 13 Features",
    author: "Jane Smith",
    url: "https://example.com/nextjs-13-features",
    likes: 5,
  },
  {
    id: 3,
    title: "Building a Blog with Next.js",
    author: "Alice Johnson",
    url: "https://example.com/building-a-blog-with-nextjs",
    likes: 8,
  },
];

let nextId = 4 */

/* export const getBlogs = () => {
    return blogs
} */

 export const getBlogs = async () => {
  return db.query.blogs.findMany()
}

/* export const addBlog = (blog: NewBlog) => {
  const newBlog: Blog = { id: nextId++, ...blog };

  blogs.push(newBlog);

  return newBlog;
}

export const getBlogById = (id: number) => {
  return blogs.find(blog => blog.id === id)
}

export const IncreaseLikes = (id: number) :Blog[] => {
  const blog = blogs.find(blog => blog.id === id)
  if (blog) {
    blog.likes += 1
  }
  return blogs
} */