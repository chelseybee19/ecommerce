import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {useSelector} from "react-redux";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
export default function Checkout() {
    const productCart = useSelector((state) => state.cart.cartItems);
    const stripeData = productCart.map(product => {
      return {
        price: product.stripeId,
        quantity: product.qty,
      }
    })
    console.log(stripeData)
    const handleClick = async () => {
      const body = {
        productCart: stripeData,
        successUrl: "https://the-soso-artist.netlify.app/order",
        cancelUrl: "https://the-soso-artist.netlify.app/",
      };
      const session = await axios.post("https://the-soso-artist.herokuapp.com/payment", body);
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: session.data.id,
      });
      console.log(result.error.message);
    };
    return ( <button role = "link"
      onClick = {
        handleClick
      } >
      Checkout </button>
    );
  }