import Link from "next/link";

const Tool = ({ name, path }) => {
    return (
        <Link href={path}>
            <article className="bg-black h-40 flex justify-center items-center rounded-md">
                <h5 className="text-white font-extrabold text-3xl drop-shadow-xl shadow-white-400">{name}</h5>
            </article>
        </Link>
    )
}

export default Tool;