
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderA from "../img/slider1.jpg"
import Sliderb from "../img/slider2.jpg"
import Sliderc from "../img/slider3.jpg"
import Sliderd from "../img/slider4.jpg"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,]);


export default function App() {
  
  
  
  return (
    <>
    <div className="slider">
    <Swiper    loop={true} className="mySwiper">
        <SwiperSlide>
          <img className="home__img" src={SliderA}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home__img"  src={Sliderb}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home__img"  src={Sliderc}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="home__img"  src={Sliderd}></img>
        </SwiperSlide>
        
      </Swiper>
      
      </div>
      anurag pandey
      </>
  )
}