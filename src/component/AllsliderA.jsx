
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/Alltest.css"
import Product from "./Product";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./style.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function AllsliderA({img1,img2,img3,img4,img5,img6,img7,img8,img9}) {
  
  
  
  return (
    <Swiper  slidesPerView={4} spaceBetween={10} pagination={{
      "clickable": true 
    }} navigation={true}  className="mySwiper">
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide> 
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
  )
}