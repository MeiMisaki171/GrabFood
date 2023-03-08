import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import FoodItem from './FoodItem/FoodItem';
import './FoodMenu.scss';


const FoodMenu = ({ className }) => {
 
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
          <SwiperSlide><FoodItem/></SwiperSlide>
          <SwiperSlide><FoodItem /></SwiperSlide>
          <SwiperSlide><FoodItem /></SwiperSlide>
          <SwiperSlide><FoodItem /></SwiperSlide>
          <SwiperSlide><FoodItem /></SwiperSlide>
          <SwiperSlide><FoodItem /></SwiperSlide>
          <SwiperSlide><FoodItem/></SwiperSlide>
      </Swiper>
    </>
  
  )
}

export default FoodMenu
