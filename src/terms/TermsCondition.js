import React from 'react'
import Navbar from '../component/navbar/Navbar'


function TermsCondition() {
  return (
    <div>
      <div className="lg:shadow-md ">

        <Navbar />
      </div>
      <div className='flex justify-center items-center'>
      <div className='my-12 w-[80%] border border-black rounded-xl'>
        <div className="collapse collapse-arrow  ">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>


      </div>

      </div>
    </div>
  )
}

export default TermsCondition
