'use client'
import ProtectedRoute from "./hooks/ProtectedRoute"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
export default function Home() {
  const [userInfo, setUserInfo] = useState(null)
  const user = JSON.parse(localStorage.getItem('userInfo'))

  const { push } = useRouter()
  useEffect(() => {
    setUserInfo(user)
  }, [])

  return (
    <ProtectedRoute>
        <main className="p-8"
        style={{
          backgroundImage: `url(/assets/home-bg.jpg)`,
          backgroundPosition: 'center',
          // backgroundSize: 'cover',
          height: '78vh'
      }}>
          <div className="flex justify-center items-center w-full h-full"> 
              <div className="rounded w-[400px] p-5">
                  <h2 className="text-white text-2xl font-medium text-center">Hello there!</h2>
                  <h3 className="text-white text-4xl font-semibold text-center my-3 mt-7">Welcome to the dark side 
                    <span className="ml-2 text-yellow-300">
                      {
                        userInfo !== null ?
                        `${userInfo.firstName}!` : '!'
                      }
                    </span>
                  </h3>
                  <p className="italic text-white text-center px-10 mt-10">"A film for a generation growing up without fairy tales."</p>
                  <p className="text-white text-center">―George Lucas</p>
                  <div className="flex justify-center w-full">
                    <button
                    onClick={()=>push('/blog')} 
                    className="border-white border rounded-full px-4 py-2 text-yellow-400 font-semibold mt-10"
                    >
                      Read Blogs
                    </button>
                  </div>
                
            </div>
          </div>
        </main>
    </ProtectedRoute>

  );
}
