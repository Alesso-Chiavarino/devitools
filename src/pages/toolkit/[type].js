import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
// import styles from '../../styles/Toolkit.module.css'

const Tool = ({ data }) => {

    const router = useRouter();
    const params = router.query.type;

    return (

        <Layout title={`${params}-Toolkit`}>
            <div className="bg-black min-h-screen text-white ">
                <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pb-1">
                    <div className="bg-black opacity-[0.93] p-5">
                        <h1 className="text-5xl font-extrabold mx-auto text-transparent bg-gradient-to-tr from-white to-slate-300 bg-clip-text w-fit">{data[0].type}</h1>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 container py-10 mx-auto">
                    {data.map((site, i) => (
                        <ToolCard key={i} {...site} />
                    ))}
                </div>
            </div>
        </Layout>

    );
};

export default Tool;

export const getServerSideProps = async (context) => {

    const params = context.query.type;
    // console.log(params)
    const response = await fetch(`http://localhost:3000/api/tools?type=${params}`)
    // const response = await fetch(`https://devitools.vercel.app/api/tools?type=${params}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}