import Link from "next/link";
import styles from '../styles/Tool.module.scss'

const Tool = ({ name, path }) => {
    return (
        <Link href={path}>
            <article className={`${styles.tool} overflow-hidden rounded-md`}>
                <div className="bg-black opacity-95 hover:opacity-[.96] h-40 flex justify-center text-white items-center rounded-md transition-all duration-500">
                    <h5 className=" font-extrabold text-3xl drop-shadow-xl shadow-white-400">{name}</h5>
                </div>
            </article>
        </Link>
    )
}

export default Tool;