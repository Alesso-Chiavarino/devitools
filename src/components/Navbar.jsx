// import React from 'react'
import Brand from "./Brand"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pb-1">
            <nav className="bg-black flex justify-between p-7 px-52">
                <Brand />
                <Link href={'/hola'} className='text-white font-bold text-lg'>Home</Link>
            </nav>
        </div>
    )
}

export default Navbar