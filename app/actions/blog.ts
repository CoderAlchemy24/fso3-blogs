'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addBlog } from "../services/blogs";
import { IncreaseLikes } from "../services/blogs";

export async function createBlog(data: FormData) {
    const title = data.get('title') as string;
    const author = data.get('author') as string;
    const url = data.get('url') as string;
    const likes = 0; 

    addBlog({ title, author, url, likes });
    redirect('/blogs');
}
  
export const increaseLikes = async (formData: FormData) => {
  const likes = Number(formData.get('likes')) + 1
  const id = Number(formData.get('id'))
  IncreaseLikes(id)
  revalidatePath(`/blogs/${id}`)
  revalidatePath("/blogs")
}