import React from 'react'
import Header from '../component/Header'
import "../style/electeic.css"
import Product1 from "../img/man.jpg"
import Product from '../component/Product'
import Circlepro from "../component/Circlepro"
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/Alltest.css"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "../component/style.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);



function Electeic() {
    return (
        <>
            <Header />
            
            <div className="electeic">
          
                <div className="electic__all__collom">
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
                                image={Product1}
                                rating={5}
                            />
                        </SwiperSlide>
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
                                    image={Product1}
                                    rating={5}
                                />
                            
                         </SwiperSlide>
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
                                    image={Product1}
                                    rating={5}
                                />
                            
                        </SwiperSlide>
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
                                    image={Product1}
                                    rating={5}
                                />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                        <Circlepro
                                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius eligendi iste aspernatur! Illo praesentium hic,"
                                  price={25}
                                    image={Product1}
                                    rating={5}
                                />
                            
                        </SwiperSlide>
                    </Swiper>
                    
                </div>
          
            </div>
            </>
       
    )
}

export default Electeic
