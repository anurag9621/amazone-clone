import React from 'react'
import Header from '../component/Header'
import Product from '../component/Product'
import Product1 from "../img/free1.jpg"
import Product2 from "../img/free2.jpg"
import Product3 from "../img/free3.jpg"
import Product4 from "../img/free4.jpg"
import Product5 from "../img/free5.jpg"
import Product6 from "../img/free6.jpg"
import Product7 from "../img/free7.jpg"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "../style/Alltest.css"
import "../style/electeic.css"
import "../component/style.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

function Homepro() {
    return (
        <div>
            <Header />
            <div className="home__pro">
                <div className="electic__all__collom">
                    <div className="refrisreter">
                    <h2>Lorem ipsum dolor sit amet.</h2>
                         <Swiper  slidesPerView={4} spaceBetween={30} pagination={{
                         "clickable": true 
                         }} navigation={true}  className="mySwiper marginlr">
                        <SwiperSlide>
                        
                            <Product
                                 title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                 price={25}
                                image={Product1}
                                rating={5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product
                              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                              price={25}
                                image={Product2}
                                rating={5}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Product
                              title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                              price={25}
                                image={Product3}
                                rating={5}
                            />

                        </SwiperSlide>
                        <SwiperSlide>
                            <Product
                                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                  price={25}
                                    image={Product4}
                                    rating={5}
                                />
                            
                         </SwiperSlide>
                        <SwiperSlide>
                        <Product
                                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                  price={25}
                                    image={Product5}
                                    rating={5}
                                />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                        <Product
                                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                  price={25}
                                    image={Product6}
                                    rating={5}
                                />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                        <Product
                                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                  price={25}
                                    image={Product7}
                                    rating={5}
                                />
                             
                        </SwiperSlide>
                        <SwiperSlide>
                        <Product
                                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                  price={25}
                                    image={Product7}
                                    rating={5}
                                />
                            
                        </SwiperSlide>
                       
                    </Swiper>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Homepro
