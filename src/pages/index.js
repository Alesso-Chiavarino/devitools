import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import ToolkitContainer from '@/components/ToolkitContainer'

const Home = () => {
  return (
    <Layout title='Home' >
      <div className='bg-black'>
        <Banner />
        <ToolkitContainer />
      </div>
    </Layout>
  )
}

export default Home;