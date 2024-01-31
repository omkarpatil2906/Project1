import React, { useContext } from 'react';
import { CheckoutContext } from './Checkout';


function Order() {
    const {handleNext}= useContext(CheckoutContext)
  return (
    <div>
      <p>Order</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Order;