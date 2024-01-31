import React, { createContext, useState } from 'react';
import Address from './Address';
import Dispatch from './Dispatch';
import Order from './Order';
import { Steps } from 'antd';
import { useNavigate } from 'react-router-dom';

export const CheckoutContext = createContext();

const stepsData = [
  {
    title: 'Address',
    component: <Address />,
  },
  {
    title: 'Dispatch',
    component: <Dispatch />,
  },
  {
    title: 'Order',
    component: <Order />,
  },
];

function Checkout() {
    const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
        navigate('/checkout');
    }
  };

  return (
    <CheckoutContext.Provider value={{ handleNext }}>
      <div className='h-screen'>
        <div className='flex justify-center items-center'>
          <Steps className='w-1/2' current={currentStep}>
            {stepsData.map((step, index) => (
              <Steps.Step key={index} title={step.title} description='This is a description.' />
            ))}
          </Steps>
        </div>
        {/* Render the current step component */}
        {stepsData[currentStep].component}
      </div>
    </CheckoutContext.Provider>
  );
}

export default Checkout;
