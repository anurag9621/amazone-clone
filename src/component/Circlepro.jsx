import React from 'react'
import "../style/circlepro.css"
import { useStateValue } from "../server/StateProvider";


function Circlepro({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasketc = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };

    return (
        <div>
             <div className="circlepro">
                <div className="circlepro__info">
                    <p>{title}</p>
                    <p className="circlepro__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="circlepro__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))}
                    </div>
                </div>
                <img src={image} alt="" />
                <button onClick={addToBasketc} >Add to Basket</button>
   
            </div>
        </div>
    )
}

export default Circlepro
