import React from 'react'
import Header from '../component/Header'
import "../style/cart.css"
import Adds from "../img/adds.jpg"
import Subtotal from "../component/Subtotal"
import { useStateValue } from '../server/StateProvider'
import CheckoutProduct from "../component/CheckoutProduct"
import { db } from '../server/firebase'
function Cart() {
    const [{ basket, user }, dispatch] = useStateValue()
  
    return (
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img src={Adds} alt="" className="checkout_ad" />
                    <div>
                    <h3>Hello,{user?.email} </h3>
                        <h2 className="checkout__title">
                            Your shopping Basket
                        </h2>
                        {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
                    </div>

                </div>
                <div className="checkout__right">
                    <Subtotal/>
                 
                </div>
            </div>
        </div>
    )
}

export default Cart
