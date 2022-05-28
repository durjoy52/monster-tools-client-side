import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import Reviews from './Reviews';
import SideSection from './SideSection';
import Summery from './Summery';
import TeamMember from './TeamMember';

const Home = () => {
    return (
        <div className='container mx-auto p-2'>
           <Banner/>
           <Products/>
           <TeamMember/>
           <Reviews/>
           <SideSection/>
           <Summery/>
        </div>
    );
};

export default Home;