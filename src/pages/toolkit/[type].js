import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
// import styles from '../../styles/Toolkit.module.css'

const Tool = ({ data }) => {

    const router = useRouter();

    const params = router.query.type;

    // console.log(data)

    // console.log(styles.paramsCont)

    return (

        <Layout title={`${params}-Toolkit`}>

            <div className="bg-black min-h-screen text-white ">
                <div className="bg-gradient-to-r from-violet-400 via-blue-400 to-blue-600 pb-1">
                    <div className="bg-black p-5 text-center">
                        <h1 className="text-5xl font-extrabold">{data[0].type}</h1>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 container py-10 mx-auto">
                    {data.map((site, i) => (
                        <article key={i} className="border-2 border-violet-400 p-5 flex flex-col justify-between gap-5 rounded-md">
                            <a href={site.url} target="_blank" rel="noreferrer" className="img-container overflow-hidden pb-5 border-b-2 border-violet-400">
                                <img src={site.img} alt={site.name} className="object-cover hover:scale-110 opacity-90 hover:opacity-100 transition-all duration-300 rounded-md" />
                            </a>
                            <h3 className="text-xl font-bold">{site.name}</h3>
                            <p>{site.description}</p>
                            <a href={site.url} target="_blank" rel="noreferrer" className="bg-violet-400 w-1/4 rounded-md text-center font-bold py-1 px-2">Learn More</a>
                        </article>
                    ))}
                </div>



            </div>

        </Layout>

    );
};

export default Tool;

export const getServerSideProps = async (context) => {

    const params = context.query.type;
    const response = await fetch(`http://localhost:3000/api/tools?type=${params}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}