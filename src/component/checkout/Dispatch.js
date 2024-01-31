import React, { useContext } from 'react';
import { CheckoutContext } from './Checkout';

function Dispatch() {
    const {handleNext}= useContext(CheckoutContext)
  return (
    <div>
      <p>Dispatch</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Dispatch;