import Brand from "./Brand"
import { useEffect, useState } from "react"
import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import Offcanvas from "./Offcanvas"

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [opacity, setOpacity] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;
            if (offset > 99) {
                return setOpacity(true);
            }
            setOpacity(false);
        };

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <div className={`bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pb-1 ${opacity && 'opacity-95'} max-[1000px]:opacity-100 z-40 sticky top-0 w-full`}>
                <nav className="bg-black flex justify-between sm:py-7 z-50 max-[1000px]:sticky max-[1000px]:top-0 py-7 px-10 xl:px-52">
                    <Brand />
                    <div className="flex items-center gap-5">
                        <Link href={'/'} className='text-white font-bold text-md md:text-lg hover:text-blue-400 max-[1000px]:hidden'>Home</Link>
                        <a href="https://github.com/Alesso-Chiavarino" target={'_blank'} className='flex gap-2 max-[1000px]:hidden transition-all duration-200 bg-blue-500 hover:bg-transparent border-transparent border-[2px] hover:border-blue-400 rounded-xl px-1 md:px-2 py-1 font-extrabold'> <AiFillGithub className="text-white text-2xl" /> <span className="text-white">Follow Me!</span> </a>
                        {show ? <IoClose className="text-white text-2xl cursor-pointer" onClick={() => setShow(!show)} /> : <RiMenu3Fill className="text-white text-2xl cursor-pointer hidden max-[1000px]:block" onClick={() => setShow(!show)} />}
                    </div>
                </nav>
            </div>
            <Offcanvas show={show} setShow={setShow} />
        </>
    )
}

export default Navbar