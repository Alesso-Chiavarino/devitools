import { toolkit } from "./ToolkitContainer";
import Link from "next/link";
import styles from '../styles/Aside.module.scss'

const Aside = () => {
    return (
        <aside className="w-1/6 bg-gradient-to-bl from-violet-400 via-blue-400 to-blue-400 pr-2 sticky top-0 h-screen overflow-y-auto">
            <div className="bg-black h-auto py-5">
                <div className="bg-gradient-to-r from-violet-400 to-blue-400 w-3/4 mx-auto rounded-2xl p-1 text-center">
                    <h2 className="text-white font-extrabold text-xl">ToolKit</h2>
                </div>
                <div>
                    <ul className="w-3/4 mx-auto my-5 flex flex-col gap-10">
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