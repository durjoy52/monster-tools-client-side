import Reviews from '../Home/Reviews';
import Products from '../Products/Products';
import Banner from './Banner';
import SideSection from './SideSection';
import Summery from './Summery';
import TeamMember from './TeamMember';
const Home = () => {
    return (
        <>
           <Banner/>
           <div  className='container mx-auto p-2'>
           <Products/>
           <TeamMember/>
           <Reviews/>
           <SideSection/>
           <Summery/>
           </div>
        </>
    );
};

export default Home;