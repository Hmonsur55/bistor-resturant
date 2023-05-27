import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import slide6 from '../../../assets/home/slide1.jpg'
import slide7 from '../../../assets/home/slide3.jpg'
import slide8 from '../../../assets/home/slide5.jpg'
const Category = () => {
    return (
      <div className="max-w-screen-xl mx-auto mb-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Shup
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Desarts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide7} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Soup
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide8} alt="" />
            <p className="-mt-16 text-center uppercase text-3xl text-white">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Category;