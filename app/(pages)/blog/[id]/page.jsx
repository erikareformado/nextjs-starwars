
  import ShowBlog from "@/app/components/Blog/Show"
  export async function getStaticPaths() {

    // Call an external API endpoint to get posts
    const posts =  await fetch(`${process.env.NEXT_PUBLIC_BLOG_ID_API_URL}/posts`).then((res) => res.json())
    // const posts = await res.json()
   
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
   
    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
  }

  export async function generateStaticParams() {
    const posts = await fetch(`${process.env.NEXT_PUBLIC_BLOG_ID_API_URL}/posts`).then((res) => res.json())
    return posts.map((post) => ({
      slug: post.id,
    }))
  }

  const BlogShow = ({params}) => {
    return (
      <ShowBlog id={params.id}/>
    )
  }

  export default BlogShow