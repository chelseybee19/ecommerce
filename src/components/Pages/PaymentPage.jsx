import React from 'react';
import CheckoutSteps from '../CheckoutSteps';
import Checkout from '../Checkout';






function PaymentPage(props) {
  


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

              <label htmlFor="paymentMethod">
                Stripe
          </label>
            </div>

          </li>

        </ul>
      </form>
      <div>
          <Checkout/>
      </div>
    </div>
  </div>)

}
export default PaymentPage;