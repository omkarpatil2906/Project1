import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

function ProductDetails() {
  const { state } = useLocation();
  const { items } = state || {};


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const labels = {
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's':''},${labels[value]}`;
  }

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return items ? (
    <div>
      <Navbar />
      <div className='flex justify-center items-center  bg-gray-300 h-[88vh] -z-50'>
        <div className=' lg:w-[60%] lg:space-x-4 p-4 lg:flex lg:gap-6 bg-white'>
          <div>
            <img src={items.image} className='object-cover h-[300px] lg:h-[440px] w-[440px] ' alt="" />
          </div>

          <div className='py-2 space-y-2 '>
            <p> <span className='font-bold'>Names : </span> {items.productName}</p>
            <p><span className='font-bold'>Price : </span>  {items.price}</p>

            <div className='flex gap-2 '>
              <span className='font-bold'>Rating :  </span>
              <Rating  name="hover-feedback"  value={value}  precision={0.5}  getLabelText={getLabelText}  onChange={(event, newValue) => {setValue(newValue);  }}  onChangeActive={(event, newHover) => {  setHover(newHover);  }}  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
              {value !== null && ( <Box>{labels[hover !== -1 ? hover : value]}</Box>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : "No item matched/found.";
}

export default ProductDetails;
