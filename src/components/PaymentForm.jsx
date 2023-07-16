import React from 'react'
import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
import { getAddress, clearAddress } from "../stores/userInfo/addressSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from "./elements/Button";

const stripePromise = loadStripe('pk_test_51NNQHnFxwsL2TMdND8HtooHsLUxyMJeJqvEIy88PqJNbNz2pDiKIH1lEGvCOLV5wa8lc2O9JLKwiSi62jXlAD9Yr003ioioHJh');

export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}



function PaymentForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    const address = useSelector(getAddress);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !cart?.length || !address) {
            return;
        }

        const productList = [];
        cart.forEach((element) => {
            const product = {
                id: element.id,
                name: element.name,
                description: element.description,
                price: element.price,
                imageUrl: element.imageUrl
            };

            productList.push(product);
        });
        try {
            const response = await fetch('https://localhost:7129/api/Checkout/checkout', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(productList)
            });

            //console.log(response);
            const responseData = await response.json();

            const paymentIntent = await stripe.confirmCardPayment(
                responseData.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }
            )
            //const paymentIntentResponse = await paymentIntent.json();
            console.log(paymentIntent);
            if (paymentIntent.paymentIntent.status === 'succeeded') {
                dispatch(clearAddress());
                dispatch(clearCart());
                navigate('/payment-success');
            }

        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    }


    return (
        <form className="md:-2/3 md:mx-auto px-2 pt-1" id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
            <div className="my-4">
                <CardElement id="card-element" />
            </div>
            <div className="flex justify-center p-2">
                <Button type="submit" disbled={loading}>
                    {
                        loading ?
                            'Loading...' :
                            'Pay Now'
                    }
                </Button>
            </div>
        </form>
    )
}

export default PaymentForm