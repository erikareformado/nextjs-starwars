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
            {id: 3, display_name: 'Blog', name: 'blog', route: 'blog'},
        ]
        setMenu(menuItems)
    }, []);

    const logout = () => {
        localStorage.clear()
        push('/login')  
      }

    return (
        <nav className="sticky top-0 z-50 w-full bg-black p-5 px-32">
            <div className="w-full flex items-center justify-between" aria-label="Global">
                <div className=" mx-auto">
                    {
                        menu !== null ?
                        menu.map((value, index)=> {
                            return (
                            
                                <a className={` rounded-md py-1 mr-6  px-4 uppercase font-bold cursor-pointer
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

                <div className="sm:ml-6 sm:block hidden">
                    <SearchInput/>
                </div>
                <div>
                    <button className="py-1 ml-6  px-4 uppercase font-bold cursor-pointer text-yellow-300 bg-black hover:border-b hover:border-white"
                    onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
            
        </nav>

    )
}

export default Navbar