import { toolkit } from "./ToolkitContainer";
import Link from "next/link";
import styles from '../styles/Aside.module.scss'

const Aside = () => {
    return (
        <aside className="xl:w-1/5 lg:w-2/6 md:w-1/3 bg-gradient-to-bl max-[1000px]:hidden from-violet-400 via-blue-400 to-blue-400 pr-2 sticky top-0 h-screen overflow-y-auto">
            <div className="bg-black opacity-90 h-auto py-10">
                <div className="bg-gradient-to-r from-violet-400 to-blue-400 w-3/4 mx-auto rounded-2xl p-1 text-center">
                    <h2 className="text-white font-extrabold text-xl">ToolKit</h2>
                </div>
                <div>
                    <ul className="w-3/4 mx-auto my-10 flex flex-col gap-12">
                        <h3 className="text-white text-3xl font-extrabold">Front End</h3>
                        {toolkit.map((tool, i) => (
                            <li className={styles.li} key={i}>
                                <Link href={tool.path}>
                                    <h3 className="text-white font-bold text-xl mb-3">{tool.name}</h3>
                                </Link>
                                <div className=" bg-white h-[2px]"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Aside;