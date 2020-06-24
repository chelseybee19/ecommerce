import React from 'react';
import CheckoutSteps from '../CheckoutSteps';

function OrderPage(props) {
    return <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="Order-box">
            <h1>Your Order is complete!</h1>
        </div>
    </div>
}

export default OrderPage
