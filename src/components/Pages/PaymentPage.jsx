import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutSteps from '../CheckoutSteps';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';




function PaymentPage(props) {
  
  const productCart = useSelector((state) => state.cart.cartItems)  
  console.log(productCart, "productCart");

  const calcPrice = (products) => {
      return products
      .map(product => product.qty * product.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  console.log(calcPrice(productCart))

  const genName = (products) => {
      //product(qty)     price
      return products
      .map(product => `${product.name} (${product.qty}): ${product.price}$` )
      .join('\n')
  }
  console.log( genName(productCart), "genName")

  const [paymentMethod, setPaymentMethod] = useState('');
  
  const price = calcPrice(productCart);
  const name = genName(productCart);

  const makePayment = token => {
      console.log('test')
      const body = {
          token,
          productCart: {price, name},
      }
      const headers = {
          "content-type": "application/json"
      }

      axios
      .post('http://localhost:4000/payment', body )
      .then((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }

//   const dispatch = useDispatch();

//    const submitHandler = (e) => {
//      e.preventDefault();
//      dispatch(savePayment({ paymentMethod }));
//      props.history.push('placeorder');
//    }

  return (<div>
    <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
    <div className="form">
      <form  >
        <ul className="form-container">
          <li>
            <h2>Payment</h2>
          </li>

          <li>
            <div>
              <input type="radio" name="paymentMethod" id="paymentMethod" value="stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}>
              </input>
              <label htmlFor="paymentMethod">
                Stripe
          </label>
            </div>

          </li>



          <li>
            {/* <button type="submit" className="button primary">Continue</button> */}
            {/* <StripeCheckout
      stripeKey= {process.env.REACT_APP_STRIPE_KEY}
      token={makePayment}
      name="something"
    />  */}
        
          </li>

        </ul>
      </form>
      <StripeCheckout
      stripeKey= {process.env.REACT_APP_STRIPE_KEY}
      token={makePayment}
      currency="eur"
      name="something"
    /> 
    </div>
  </div>)

}
export default PaymentPage;