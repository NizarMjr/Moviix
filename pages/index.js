import Footer from '@/components/Footer'
import Popular from '@/components/Popular'
import Rated from '@/components/Rated'
import Trending from '@/components/Trending'
import Welcom from '@/components/Welcom'

const Home = () => {
  return (
    <main className='App bg-bg-black'>
      <Welcom />
      <Trending />
      <Popular />
      <Rated />
      <Footer />
    </main>
  )
};
export default Home;

