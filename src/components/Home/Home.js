import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <div className='container mx-auto'>
           <Banner/>
           <Reviews/>
           <Summery/>
        </div>
    );
};

export default Home;