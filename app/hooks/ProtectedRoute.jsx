import { useEffect, useState } from "react"
import AppLayout from "../AppLayout/Index"

import { useRouter } from "next/navigation"

const ProtectedRoute = ({children}) => {

    const userToken = localStorage.getItem('token')

    const {push} = useRouter()

    useEffect(()=> {
       if(userToken === null){
            push('/login')
       }
    },[userToken])
    return (
        <>
            {
                userToken ? 
                    <AppLayout>
                        { children }
                    </AppLayout>
                : null
            }
        </>
      )
}

export default ProtectedRoute