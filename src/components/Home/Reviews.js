import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useQuery } from "react-query";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Loading from "../Loading/Loading";
import './styles.css';
const Reviews = () => {
  const {data:reviews,isLoading} = useQuery('review',()=>fetch('http://localhost:5000/review').then(res=>res.json()))
  if(isLoading){
    return <Loading/>
  }
  
  return (
    <div>
        <div className="text-center ">
        <h2 className="text-2xl">COMMENTS</h2>
        <button className="text-2xl bg-black text-white px-6 py-4 mt-2">Client Says</button>
        </div>
        <Swiper
            modules={[Autoplay,Navigation, Pagination, A11y]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            
        centeredSlides={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
         breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          }
        }}
        className='mt-4'
      >
        {
          reviews?.map(review=><SwiperSlide key={review._id}><div className="h-52">
          <div className="card-body">
            <div className="flex justify-between">
              <div className="avatar">
                <div className="w-12 rounded-full mr-2">
                  <img src={review?.userImg}alt='' />
                </div>
                <span className="font-bold">{review?.userName}</span>
              </div>
              {
                review?.rating.includes('1') && <div className="flex text-warning">
                <BsStarFill />
                <BsStar/>
                <BsStar/>
                <BsStar/>
                <BsStar/>
              </div>
              }{
                review?.rating.includes('2') && <div className="flex text-warning">
                <BsStarFill />
                <BsStarFill />
                <BsStar/>
                <BsStar/>
                <BsStar/>
              </div>
              }
              {
                review?.rating.includes('3') && <div className="flex text-warning">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar/>
                <BsStar/>
              </div>
              }
              {
                review?.rating.includes('4') && <div className="flex text-warning">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar/>
              </div>
              }
              {
                review?.rating.includes('5') && <div className="flex text-warning">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              }
              
            </div>
            <p>{review?.reviewText.slice(0,50)}</p>
          </div>
        </div></SwiperSlide>)
        }
        </Swiper>
    </div>
  );
};

export default Reviews;
