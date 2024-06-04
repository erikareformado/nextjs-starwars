'use client'
import ProtectedRoute from "@/app/hooks/ProtectedRoute"
import { useEffect, useState } from "react"

const ShowBlog = ({id}) => {
    const [blog,setBlog] = useState({})
    useEffect(() => {
        
        const fetchBlog = async() => {
            const blog = await fetch(
                `${process.env.NEXT_PUBLIC_BLOG_API_URL}/posts/${id}`
            ).then((res) => res.json()
            .catch((error) => console.log(error) ));
            setBlog(blog)
        }
        fetchBlog()
    }, [])
    return (
        <ProtectedRoute>
            <main className="text-white p-8">
                <h1 className="text-center text-2xl text-yellow-300 font-semibold">{blog.title}</h1>
                <div className="flex justify-center w-full">
                    <div className="max-w-xl mt-10">
                        <p className="text-left">{blog.content}</p>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    )
}

export default ShowBlog