'use client'
import { useState } from "react"
import authApi from "@/app/services/authApi"
import notify from "@/app/components/Toastify/toaster.js"

import Header from "@/app/components/Header"
import Input from "@/app/components/Input"

import { useApplication } from "@/app/context/ApplicationContext"
import { useRouter } from 'next/navigation';

const Login = () => {
    const [username, setUsername] = useState('emilys')
    const [password, setPassword] = useState('emilyspass')

    const { push } = useRouter()
    const {setUserInfo} = useApplication()

    const submitLogin = async(event) => {
        event.preventDefault()
        if(username === '' || password === '') {
            notify('Username and password is required.', 'error')
        }else 
        {
            await authApi.post('login',
            {
                username,
                password
            }
            )
            .then( res => {
                const data = res.data
                setUserInfo(data)
                localStorage.setItem("userInfo", JSON.stringify(data))
                localStorage.setItem("token", res.data.token)
                push('/')
            })
            .catch(err => {
                notify(err.response.data.message, 'error')
            })
        }
    }

    return (
        <main
        className="p-5"
         style={{
            backgroundImage: `url(/assets/background.jpg)`,
            backgroundPosition: 'center',
            // backgroundSize: 'cover',
            height: '100vh'
        }}>
           
            <div className="w-full h-[80vh] flex flex-col justify-center items-center">
                <Header bgColor={'bg-transparent'}/>
                <div className="bg-white rounded-lg max-w-md w-full py-10 px-8 mt-3">
                    <h3 className="text-2xl font-semibold text-center mb-4">Login</h3>
                        <form onSubmit={submitLogin}>
                            <label htmlFor="email" className="text-sm mb-2">
                                Email 
                                <span className="text-red-300"> *</span>
                            </label>
                            <Input
                                label="Email"
                                type="text"
                                value={username}
                                disabled={false}
                                placeholder="Enter email"
                                name="txtEmail"
                                required={true}
                                onChange={(e)=> setUsername(e.target.value)}
                                style="mt-2"
                            />
                            <div className="mt-3">
                                <label htmlFor="email" className="text-sm mb-2">
                                    Password 
                                    <span className="text-red-300"> *</span>
                                </label>
                                <Input
                                    label="Password"
                                    type="password"
                                    value={password}
                                    disabled={false}
                                    placeholder="Enter password"
                                    name="txtPassword"
                                    required={true}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                    
                        <button 
                        type="submit"
                        className="bg-yellow-300 text-black w-full rounded-lg p-2 mt-5 font-medium"
                        >
                            Continue login
                        </button>
                    </form>
                </div>
            </div>
            
        </main>
    )
}

export default Login