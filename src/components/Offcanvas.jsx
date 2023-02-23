import Link from "next/link"
import { AiFillGithub } from 'react-icons/ai'
import { FrontToolkit, BackToolkit } from "./ToolkitContainer"
import styles from '@/styles/Aside.module.scss';


const Offcanvas = ({ show, setShow }) => {
    return (
        <div className={show ? "offcanvas bg-black translate-x-[0%] transition-all overflow-y-auto duration-300 w-full h-screen  fixed z-30" : "offcanvas bg-black translate-x-[100%] transition-all duration-300 w-full h-screen  fixed z-30"}>

            <div className="flex items-center justify-around gap-5 my-10">
                <Link href={'/'} className='text-white font-bold text-xl md:text-lg hover:text-blue-400' onClick={() => setShow(!show)}>Home</Link>
                <a href="https://github.com/Alesso-Chiavarino" target={'_blank'} className='flex gap-2 transition-all duration-200 bg-blue-500 hover:bg-transparent border-transparent border-[2px] hover:border-blue-400 rounded-xl px-1 md:px-2 py-1 font-extrabold'> <AiFillGithub className="text-white text-2xl" /> <span className="text-white">Follow Me!</span> </a>
            </div>

            <ul className="w-3/4 mx-auto mb-16 flex flex-col gap-7">
                <h3 className="text-white text-3xl font-extrabold">Front End</h3>
                {FrontToolkit.map((tool, i) => (
                    <li key={i} className={styles.li}>
                        <Link href={tool.path} onClick={() => setShow(!show)}>
                            <h3 className="text-white font-bold text-xl mb-3">{tool.name}</h3>
                        </Link>
                        <div className=" bg-white h-[2px]" />
                    </li>
                ))}
            </ul>
            <ul className="w-3/4 mx-auto mb-16 flex flex-col gap-7">
                <h3 className="text-white text-3xl font-extrabold">Back End</h3>
                {BackToolkit.map((tool, i) => (
                    <li key={i} className={styles.li} >
                        <Link href={tool.path} onClick={() => setShow(!show)}>
                            <h3 className="text-white font-bold text-xl mb-3">{tool.name}</h3>
                        </Link>
                        <div className=" bg-white h-[2px]" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Offcanvas;