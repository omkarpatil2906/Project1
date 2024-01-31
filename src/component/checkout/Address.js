import React, { useContext } from 'react';
import { CheckoutContext } from './Checkout';



function Address() {
    const {handleNext}= useContext(CheckoutContext)
    return (
        <div>
            <h1>Shipping Address</h1>

            {/* <div>
                <div>
                    <legend>First Name</legend>
                    <input type="text" className='border' placeholder='Enter a Name'/>
                </div>

                <div>
                    <legend>Last Name</legend>
                    <input type="text" className='border' placeholder='Enter a  Last Name'/>
                </div>

                <div>
                    <legend>Email</legend>
                    <input type="email" className='border' placeholder='Enter a Email'/>
                </div>

                <div>
                    <legend><Address></Address></legend>
                   <textarea name="address" placeholder='Enter Address' id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                    <legend>City</legend>
                    <input type="text" className='border' placeholder='Enter a City'/>
                </div>

                <div>
                    <legend>Country</legend>
                    <p>India</p>
                </div>

                <div>
                    <legend>State/Province</legend>
                    <input type="text" className='border' placeholder='Enter a State'/>
                </div>

                <div>
                    <legend>ZIP code</legend>
                    <input type="number" className='border' placeholder='Enter a Zip Code'/>
                </div>

                <div>
                    <legend>Telephone</legend>
                    <input type="number" className='border' placeholder='Enter a Number'/>
                </div>
            </div> */}

            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Address;