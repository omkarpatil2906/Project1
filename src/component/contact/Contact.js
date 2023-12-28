import React from 'react';
import Navbar from '../navbar/Navbar';

function Contact() {
  return (
    <div >
       <div className="lg:shadow-md ">

<Navbar />
</div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col m-5 lg:flex-row lg:w-[75%] gap-2 lg:mt-24'>

          <div className='lg:w-[40%] p-3'>
            <h1 className='text-2xl font-bold'>Contact Us</h1>
            <p>Nothing sounds better than having a word from you. Feel free to drop by or call us or email us anytime.</p>
          </div>

          <div className='lg:w-[60%] p-3 bg-blue-50 flex flex-col lg:flex-row lg:justify-around gap-3'>
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold'>Working Hours</h1>
              <p>Weekdays: 8am to 8pm</p>
              <p>Weekends: 6am to 9pm</p>
            </div>
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold'>Where are we?</h1>
              <div className='space-y-2'>
                <p>Kelley A. Fleming 196 Woodside Circle Mobile,<br /> FL 36602 Phone:240-256-1942</p>
                <p>Michael I. Days 3756 Preston Street Wichita,<br /> KS 67213 Phone:857-778-1265</p>
              </div>
            </div>
          </div>

        </div>


        <div className='my-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766131.622925732!2d60.989773153459055!3d19.728315307595256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1702554116685!5m2!1sen!2sin" className='w-full h-60 lg:h-[500px] lg:w-[1000px]' />

        
        </div>
      </div>
    </div>
  );
}

export default Contact;

