import { notFound } from "next/navigation"
import { getBlogById } from "../../services/blogs"
import { increaseLikes } from "../../actions/blog"


export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blog = getBlogById(Number(id))

  if (!blog) {
    notFound()
  }

  return (
    <div>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.author}</p>
        <p>{blog.url}</p>
        <p>{blog.likes} likes</p>
      </div>
      <form action={increaseLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <input type="hidden" name="likes" value={blog.likes} />
        <button type="submit">Like</button>
      </form>
    </div>
  )
}