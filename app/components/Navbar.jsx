'use client'

import { useEffect, useState } from "react";
import {usePathname, useRouter} from 'next/navigation';

import SearchInput from "./SearchInput";

const Navbar = () => {
    const [menu, setMenu] = useState(null)

    const pathname = usePathname();
    const {push} = useRouter();

    useEffect(() => {
        // Set navbar menu button here
        const menuItems = [
            {
                id: 1, 
                display_name: 'Home',   // display on button 
                name: 'home',           // name of menu used for checking active route
                route: '/'              // menu route
            },
            {id: 2, display_name: 'Characters', name: 'people', route: '/people'},
            {id: 3, display_name: 'Blog', name: 'blog', route: '/blog'},
        ]
        setMenu(menuItems)
    }, []);

    const logout = () => {
        localStorage.clear()
        push('/login')  
      }

    return (
        <nav className="sticky top-0 z-50 w-full bg-black sm:px-32 p-5">
            <div className="w-full flex sm:flex-row flex-col items-center justify-between" aria-label="Global">
                <div className="mx-auto">
                    {
                        menu !== null ?
                        menu.map((value, index)=> {
                            return (
                                value.name === 'home' ?
                                <a className={` rounded-md py-1 sm:mr-6 mr-3 px-4 uppercase font-bold cursor-pointer
                                ${pathname === '/' ? 'bg-yellow-300 text-black  border-yellow-300' : 'text-yellow-300 bg-black border-[0.1px] border-white'}`}
                                key={index}
                                onClick={() => push(`${value.route}`)}
                                >
                                    {value.display_name}
                                </a >
                                :
                                <a className={` rounded-md py-1 sm:mr-6 mr-3 px-4 uppercase font-bold cursor-pointer
                                ${pathname.includes(value.name) ? 'bg-yellow-300 text-black  border-yellow-300' : 'text-yellow-300 bg-black border-[0.1px] border-white'}`}
                                key={index}
                                onClick={() => push(`${value.route}`)}
                                >
                                    {value.display_name}
                                </a >
                            )
                        })
                        : null
                    }
                </div>
                <div className="flex justify-between sm:justify-center sm:w-fit w-full">
                    <div className="sm:ml-6 sm:mr-0 mr-3 sm:w-64 w-fit mt-5 sm:mt-0">
                    { pathname.includes('people') ? 
                            <SearchInput/>
                        : null
                    } 
                    </div>
                    <div className="flex w-full sm:w-fit justify-end items-center mt-5 sm:mt-0 mr-5">
                        <button className="px-4 uppercase font-bold cursor-pointer text-yellow-300 bg-black hover:border-b hover:border-white"
                        onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            
        </nav>

    )
}

export default Navbar