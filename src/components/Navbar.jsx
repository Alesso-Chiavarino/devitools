import Brand from "./Brand"
import { useState } from "react"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { toolkit } from "./ToolkitContainer"
import styles from '@/styles/Aside.module.scss';

const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pb-1 opacity-95 max-[1000px]:opacity-100 z-40 sticky top-0 w-full">
                <nav className="bg-black flex justify-between sm:py-7 z-50 max-[1000px]:sticky max-[1000px]:top-0 py-2 px-10 xl:px-52">
                    <Brand />
                    <div className="flex items-center gap-5">
                        <Link href={'/'} className='text-white font-bold text-md md:text-lg hover:text-blue-400 max-[1000px]:hidden'>Home</Link>
                        <a href="https://github.com/Alesso-Chiavarino" target={'_blank'} className='flex gap-2 max-[1000px]:hidden transition-all duration-200 bg-blue-500 hover:bg-transparent border-transparent border-[2px] hover:border-blue-400 rounded-xl px-1 md:px-2 py-1 font-extrabold'> <AiFillGithub className="text-white text-2xl" /> <span className="text-white">Follow Me!</span> </a>
                        {show ? <IoClose className="text-white text-2xl cursor-pointer" onClick={() => setShow(!show)} /> : <RiMenu3Fill className="text-white text-2xl cursor-pointer hidden max-[1000px]:block" onClick={() => setShow(!show)} />}
                    </div>
                </nav>
            </div>


            {/* offcanvas */}
            <div className={show ? "offcanvas bg-black translate-x-[0%] transition-all overflow-y-auto duration-300 w-full h-screen  fixed z-30" : "offcanvas bg-black translate-x-[100%] transition-all duration-300 w-full h-screen  fixed z-30"}>

                <div className="flex items-center justify-around gap-5 my-10">
                    <Link href={'/'} className='text-white font-bold text-xl md:text-lg hover:text-blue-400' onClick={() => setShow(!show)}>Home</Link>
                    <a href="https://github.com/Alesso-Chiavarino" target={'_blank'} className='flex gap-2 transition-all duration-200 bg-blue-500 hover:bg-transparent border-transparent border-[2px] hover:border-blue-400 rounded-xl px-1 md:px-2 py-1 font-extrabold'> <AiFillGithub className="text-white text-2xl" /> <span className="text-white">Follow Me!</span> </a>
                </div>

                <ul className="w-3/4 mx-auto mb-16 flex flex-col gap-7">
                    <h3 className="text-white text-3xl font-extrabold">Front End</h3>
                    {toolkit.map((tool, i) => (
                        <li key={i} className={styles.li}>
                            <Link href={tool.path}>
                                <h3 className="text-white font-bold text-xl mb-3">{tool.name}</h3>
                            </Link>
                            <div className=" bg-white h-[2px]" />
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Navbar