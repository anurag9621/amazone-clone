import React from 'react'
import Header from '../component/Header'
import Slider from "../component/slider"
import Productbr from '../component/Productbr'
import Productbrsec from '../component/Productbrsec'
import ac from "../img/ac.jpg"
import frise from "../img/frise.jpg"
import micro from "../img/micro.jpg"
import washing from "../img/washing.jpg"
import cloth from "../img/cloth.jpg"
import footw from "../img/footw.jpg"
import watche from "../img/watche.jpg"
import bags from "../img/bags.jpg"
import Footer from '../component/Footer'
import gas from "../img/gas.jpg"
import cook from "../img/cookw.jpg"
import kitchen from "../img/kitchen.jpg"
import table from "../img/table.jpg"

import "../style/home.css"
function Home() {
    return (
        <div>
            <Header />
            <div className="slider__div"><Slider/></div>
            <div className="home">
                <div className="home__container">
              


                    <div className="home__row">
                        <Productbr
                            title="Top picks for your home"
                            image={ac}
                            imagea={micro}
                            imageb={frise}
                            imagec={washing}
                            sub1="ACs"
                            sub2="Microwaves"
                            sub3="Refrigerators"
                            sub4="Washing machines"
                            link="homeeq"
                        />
                         <Productbr
                            title="Styles for Men | Up to 70% off"
                            image={cloth}
                            imagea={footw}
                            imageb={watche}
                            imagec={bags}
                            sub1="Clothing"
                            sub2="Footwear"
                            sub3="Watches"
                            sub4="Bags & luggage "
                            link="books"
                        />
                         <Productbr
                            title="Cookware & dining"
                            image={gas}
                            imagea={cook}
                            imageb={kitchen}
                            imagec={table}
                            sub1="Gas stoves"
                            sub2="Cookware"
                            sub3="Kitchen storage"
                            sub4="Tableware"
                            link="books"
                        />
                       
                    </div>
                    <div className="home__row">
                        <Productbrsec
                            title="Book"
                            image={micro}
                            link="books"
                        />
                         <Productbrsec
                            title="Book"
                            image={micro}
                            link="books"
                        />
                       
                       
                    </div>
                </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Home
