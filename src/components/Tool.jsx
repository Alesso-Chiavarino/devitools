import Link from "next/link";
import styles from '../styles/Tool.module.scss'

const Tool = ({ name, path }) => {
    return (
        <Link href={path}>
            <article className={`${styles.tool} overflow-hidden rounded-md bg-gradient-to-r from-violet-400 via-blue-400 p-1 to-blue-600`}>
                <div className="bg-black h-40 flex justify-center text-white items-center rounded-md transition-all duration-500">
                    <h5 className="font-extrabold text-md sm:text-xl md:text-2xl xl:text-3xl drop-shadow-xl shadow-white-400">{name}</h5>
                </div>
            </article>
        </Link>
    )
}

export default Tool;