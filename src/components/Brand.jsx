import Link from 'next/link'
import 'animate.css';

const Brand = () => {
    return (
        <Link href='/' className="bg-gradient-to-r flex items-center from-violet-400 to-blue-400 animate__animated animate__flipInX px-2">
            <h1 className="text-xl md:text-2xl text-white font-extrabold">DeviTools</h1>
        </Link>
    )
}

export default Brand