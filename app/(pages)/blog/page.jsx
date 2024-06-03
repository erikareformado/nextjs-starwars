'use client'
import NextButton from "@/app/components/NextButton"
import PreviousButton from "@/app/components/PreviousButton"
import CardButton from "@/app/components/CardButton"
import ProtectedRoute from "@/app/hooks/ProtectedRoute"
import { useEffect, useState } from "react"
const Blog = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [lastPage,setLastPage] = useState(0)
    const [allData, setAllData] = useState([])
    const [blogsData, setBlogsData] = useState([])

    useEffect(() => {

        const fetchBlogs = async() => {
            const blogs = await fetch(
                `https://jsonplaceholder.org/posts`
            ).then((res) => res.json()
            .catch((error) => console.log(error) ));
           
            setLastPage(blogs.length / 10)
            setAllData(blogs)

          
        }
        fetchBlogs()
    }, [])


    useEffect(() => {
        const data = paginate(allData, 9, pageNumber)
        setBlogsData(data)
    },[pageNumber, allData])

    const paginate = (array, page_size, page_number) => {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
      }

    const onPrevious = () => {
        if(pageNumber > 1) {
          setPageNumber(pageNumber - 1)
        }
      
    }
    const onNext = () => {
        if(pageNumber < lastPage) {
          setPageNumber(pageNumber + 1)
        }
    
    }


    return (
        <ProtectedRoute>
            <main className="p-8 relative flex justify-center">
                <PreviousButton  
                    isDisabled={pageNumber === 1}
                    onPrevious={onPrevious}
                />
                 <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 content-center w-fit">
                    {
                        blogsData.map((blog, index) => {
                            return (
                                <div className="w-[300px]" key={index}>
                                    <div className="shadow-lg hover:rounded-b-lg hover:drop-shadow-xl hover:shadow-yellow-300" role="button">
                                        <img className="rounded-t-lg"  src={blog.image}/>
                                        <div className="rounded-b-lg h-32 p-3 text-white">
                                            <h3 className="text-xl font-semibold">
                                                {blog.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                 </div>
                <NextButton
                isDisabled={lastPage === pageNumber}
                onNextUrl={onNext}/>
            </main>
        </ProtectedRoute>
    )
}

export default Blog