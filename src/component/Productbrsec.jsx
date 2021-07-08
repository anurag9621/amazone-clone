import React from 'react'
import "../style/product.css";
import {Link} from "react-router-dom"
function Productbr({title, image,link}) {
    return (
        
        <div className="productbr">
            <div className="product__info">
            <h2>{title}</h2>
            </div>
            <div className="imagediv">
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
            </div>
            <div className="link__show__more">
            <Link to={link}> show all </Link>
            </div>
           
        </div>
    )
}

export default Productbr
