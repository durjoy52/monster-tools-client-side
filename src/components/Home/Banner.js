import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { MdNotStarted } from 'react-icons/md';
import { Link } from 'react-scroll';
import banner from '../../assets/banner.png';
const Banner = () => {
  useEffect(()=>{
    AOS.init();
  },[])
    return (
        <div className="hero min-h-screen mb-6 bg-cover" style={{backgroundImage:`url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos='fade-right' data-aos-duration="1000"  data-aos-offset="-200"
    data-aos-delay="50">
            <h1 className="mb-5 lg:text-5xl text-2xl uppercase font-serif font-semibold">We provide best quality tools with affordable</h1>
            <Link to='start' smooth={true} duration={1000} ><button className="btn btn-accent text-white font-bold">Get Started<MdNotStarted fontSize={30}/></button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;