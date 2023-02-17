// import React from 'react'
import Brand from "./Brand"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pb-1">
            <nav className="bg-black flex justify-between p-7 px-52">
                <Brand />
                <div className="flex items-center gap-5">
                    <Link href={'/'} className='text-white font-bold text-lg hover:text-blue-400'>Home</Link>
                    <Link href={'#front'} className='text-white font-bold text-lg hover:text-blue-400'>Front End</Link>
                    <Link href={'/'} className='text-white font-bold text-lg hover:text-blue-400'>Back End</Link>
                    <a href="https://github.com/Alesso-Chiavarino" target={'_blank'} className='flex gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl px-2 py-1 font-extrabold'> <AiFillGithub className="text-white text-2xl" /> <span className="text-white">Follow Me!</span> </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar