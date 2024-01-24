import React from 'react'
import Navbar from '../navbar/Navbar'



function TermsCondition() {
  return (
    <div>
      <div className="lg:shadow-md ">

        <Navbar/>
      </div>
      <div className='flex justify-center items-center'>
      <div className='my-12 w-[80%] border font-Raleway '>
        <div className="collapse collapse-arrow  ">
          <input type="radio" name="my-accordion-1" checked="checked" />
          <div className="collapse-title text-lg font-medium">
          Products may appear different than those shown in photos due to external factors like lighting.
          </div>
          <hr />
          <div className="collapse-content">
            <p>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a text box a settings menu will appear. your website by double clicking on a text box on your website. Alternatively, when you select a text box</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
          If you don't like our products, you can feel free to return them within 7 days of delivery.
          </div>
          <hr />
          <div className="collapse-content">
            <p>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a text box a settings menu will appear. your website by double clicking on a text box on your website. Alternatively, when you select a text box</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
          The original packaging should be intact at the time of returning.
          </div>
          <hr />
          
          <div className="collapse-content">
            <p>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a text box a settings menu will appear. your website by double clicking on a text box on your website. Alternatively, when you select a text box</p>
          </div>
        </div>

        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
          Kindly provide a return invoice copy to the delivery agent at the time of pickup.
          </div>
          <hr />
          <div className="collapse-content">
            <p>You can edit text on your website by double clicking on a text box on your website. Alternatively, when you select a text box a settings menu will appear. your website by double clicking on a text box on your website. Alternatively, when you select a text box</p>
          </div>
        </div>


      </div>

      </div>
    </div>
  )
}

export default TermsCondition
