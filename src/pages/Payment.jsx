import React,{useState} from 'react'
import { useStateValue } from '../server/StateProvider'
import "../style/payment.css"
import CheckoutProduct from "../component/CheckoutProduct"
import Header from '../component/Header'
import {Link, useHistory} from "react-router-dom"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from "../server/reducer"
import axios from '../server/axios';
import { useEffect } from 'react'
import { db } from "../server/firebase"

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

         
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/')
        })

    }
    const handleChange = event => {

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }

    return (
        <>
        <Header/>
        <div className="payment">
                <div className="payment__container">
                    <h1>
                        Checkout (<Link to="cart">{basket?.length} items</Link>)
                    </h1>
                <div className="payment__section">
                    <div className="payment__title">
                      <h3>Delivery Address</h3>  
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 varanasi rode</p>
                        <p>varanasi utter pradesh</p>
                    </div>
                </div>
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>Review item and Delivery</h3>
                        </div>
                        <div className="payment__items">
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
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className="pamyment__priceContainer">
                                <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                   <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button> 
                                </div>
                                    {/* Errors */}
                                    {error && <div>{error}</div>}
                            </form>
                        </div>
                </div>
            </div>
            </div>
            </>
    )
}

export default Payment
