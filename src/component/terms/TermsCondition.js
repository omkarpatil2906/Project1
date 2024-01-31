import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';

function TermsCondition() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      <div className="lg:shadow-md">
        <Navbar />
      </div>
      <div className='flex justify-center items-center'>
        <div className='my-12 w-[80%] border font-Raleway '>
          <div className="collapse collapse-arrow ">
            <input
              type="radio"
              name="my-accordion-1"
              checked={activeAccordion === 1}
              onChange={() => handleAccordionClick(1)}
            />
            <div className="collapse-title text-lg font-medium">
              Products may appear different than those shown in photos due to external factors like lighting.
            </div>
            <hr />
            <div className="collapse-content">
              <p>You can edit text on your website by double clicking on a text box on your website...</p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input
              type="radio"
              name="my-accordion-2"
              checked={activeAccordion === 2}
              onChange={() => handleAccordionClick(2)}
            />
            <div className="collapse-title text-lg font-medium">
              If you don't like our products, you can feel free to return them within 7 days of delivery.
            </div>
            <hr />
            <div className="collapse-content">
              <p>You can edit text on your website by double clicking on a text box on your website...</p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input
              type="radio"
              name="my-accordion-3"
              checked={activeAccordion === 3}
              onChange={() => handleAccordionClick(3)}
            />
            <div className="collapse-title text-lg font-medium">
              The original packaging should be intact at the time of returning.
            </div>
            <hr />
            <div className="collapse-content">
              <p>You can edit text on your website by double clicking on a text box on your website...</p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input
              type="radio"
              name="my-accordion-4"
              checked={activeAccordion === 4}
              onChange={() => handleAccordionClick(4)}
            />
            <div className="collapse-title text-lg font-medium">
              Kindly provide a return invoice copy to the delivery agent at the time of pickup.
            </div>
            <hr />
            <div className="collapse-content">
              <p>You can edit text on your website by double clicking on a text box on your website...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsCondition;
