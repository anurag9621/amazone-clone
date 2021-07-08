import React from 'react'
import "../style/product.css";
import {Link} from "react-router-dom"
function Productbr({title, image,imagea,imageb,imagec,link,sub1,sub2,sub3,sub4}) {
    return (
        
        <div className="productbr">
            <div className="product__info">
            <h2>{title}</h2>
            </div>
            <div className="imagediv">
                <div className="block">
                    <img src={image} alt="" />
                    <sub>{sub1}</sub>
                </div>
               
                <div className="block">
                    <img src={imagea} alt="" />
                    <sub>{sub2}</sub>
                    
                </div>
               
                <div className="block">
                    <img src={imageb} alt="" />
                    <sub>{sub3}</sub>
                    
                </div>
               
                <div className="block">
                    <img src={imagec} alt="" />
                    <sub>{sub4}</sub>
                    
                </div>
                
               
            </div>
            <div className="link__show__more">
            <Link to={link}> See more </Link>
            </div>
           
        </div>
    )
}

export default Productbr
