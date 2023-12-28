import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    
    <div className='bg-[#222831] text-white flex flex-col justify-center items-center  gap-6'>

      <div className='grid  justify-center md:grid-cols-2 pt-14 gap-8 p-4 xl:grid-cols-4  xl:w-10/12'>
        <div className='grid gap-3'>
          <h1 className=' font-bold font-Playfair'><LocalShippingOutlinedIcon className='mr-4' />Free Shipping</h1>
          <p>You can edit text on your website by double clicking on a text box</p>
        </div>

        <div className='grid gap-3'>
          <h1 className=' font-bold font-Playfair'><LockOutlinedIcon className='mr-4' />Secure Payment</h1>
          <p>You can edit text on your website by double clicking on a text box</p>
        </div>

        <div className='grid gap-3'>

          <h1 className=' font-bold font-Playfair'><AccessTimeOutlinedIcon className='mr-4' />24/7 Support</h1>
          <p>You can edit text on your website by double clicking on a text box</p>
        </div>

        <div className='grid gap-3'>

          <h1 className=' font-bold font-Playfair'> <CalendarMonthOutlinedIcon className='mr-4' />30 Days Return</h1>
          <p className='font-Raleway'>You can edit text on your website by double clicking on a text box</p>
        </div>
      </div>
        <hr className='w-[80%] border-t border-gray-500'/>


      <div className='grid md:grid-cols-2 justify-center  gap-8 p-4 xl:grid-cols-4  xl:w-10/12'>

        <div>
          <h1 className=' font-bold font-Playfair' >Living Mode</h1>
          <p className='font-Raleway'>You can edit text on your website by double clicking on a text box</p>
          <FacebookOutlinedIcon /> <PinterestIcon /> <TwitterIcon /> <InstagramIcon />
        </div>

        <div className='list-none '>
          <h1 className=' font-bold font-Playfair'>Quick Links</h1>
          <li className='font-Raleway cursor-pointer'>About Us</li>
          <li className='font-Raleway cursor-pointer'><Link to="/termsCondition">Terms and Condition</Link> </li>
          <li className='font-Raleway cursor-pointer'>Payments</li>
          <li className='font-Raleway cursor-pointer'>Shipping Details</li>
          <li className='font-Raleway cursor-pointer'><Link to="/contact">Contact</Link></li>
        </div>

        <div className='list-none'>
          <h1 className=' font-bold font-Playfair'>Catergories</h1>
          <li className='font-Raleway cursor-pointer'><Link to="/chairs">Chairs</Link></li>
          <li className='font-Raleway cursor-pointer'><Link to="/sofa">Sofa</Link> </li>
          <li className='font-Raleway cursor-pointer'>Tablets</li>
          <li className='font-Raleway cursor-pointer'>storage</li>
          <li className='font-Raleway cursor-pointer'>Decor</li>
        </div>

        <div>

          <h1 className=' font-bold font-Playfair'>Payment Method</h1>
          <img src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-741.png" className='h-[70%] w-[70%]' alt="" />

        </div>


      </div>
      <hr className='w-[80%] border-t border-gray-500'/>


      <div  className='mb-6'>
        <h1>© Living Mode 2019. All Rights Reserved.</h1>
      </div>


    </div>
      
  
  )
}

export default Footer
