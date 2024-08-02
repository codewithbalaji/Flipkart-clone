import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'
import Slider from '../components/Slider/Slider'
import BestDeals from '../components/Deals/Deals'
import dealsData from "../Data/Mobiles"
import Fashion from '../Data/Fashion'
import Brand from '../Data/Brand'
import Legal from '../components/Legal/Legal'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Card/>
    <Slider/>
    <BestDeals title="Best Deals on Smartphones" deals={dealsData} />
    <BestDeals title="Top Deals on Fashion" deals={Fashion} />
    <BestDeals title="Best Fashion Brand For You!" deals={Brand} />
    <Legal/>
    <Footer/>
    </>
  )
}

export default Home