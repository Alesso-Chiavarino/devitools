const Posts = ({data}) => {

    return (
        <section className='bg-black'>
            <h1 className='text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 w-fit text-transparent mx-auto py-10'>POSTS OF THE DAY</h1>
            <main className='mx-auto container py-5'>
                <ul className='grid grid-cols-3 gap-5 text-white'>
                    {data.map(post => (
                        <li key={post.id} className='bg-blue-400 rounded-md p-5'>
                            <h2 className='font-bold text-xl mb-1'>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default Posts;

export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}