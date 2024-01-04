import React ,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Rating from '@mui/material/Rating';

function ProductDetails() {
  const { state } = useLocation();
  const { items } = state || {};

  const [value, setValue] = React.useState(4);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 


  return items ? (
    <div>
      <Navbar/>
      <div className='flex justify-center items-center  bg-gray-300 h-[88vh]'>
        <div className=' lg:w-1/2 lg:space-x-4 p-4 lg:flex bg-white'>
          <div>
            <img src={items.image} className='object-cover h-[300px] lg:h-[440px] w-[440px] ' alt="" />
          </div>

          <div className='py-2 space-y-2 '>
            <p> <span className='font-bold'>Names : </span> {items.productName}</p>
            <p><span className='font-bold'>Price : </span>  {items.price}</p>

            <div className='flex gap-2'>
              <span className='font-bold'>Rating :  </span>
              <Rating name="simple-controlled" value={value} onChange={(event, newValue) => {setValue(newValue); }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : "No item matched/found.";
}

export default ProductDetails;
