import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import SideSection from './SideSection';
import Summery from './Summery';
import TeamMember from './TeamMember';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner/>
           <TeamMember/>
           <Reviews/>
           <SideSection/>
           <Summery/>
        </div>
    );
};

export default Home;