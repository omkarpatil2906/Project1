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
      <div className='flex justify-center items-center  h-screen'>
        <div className=' lg:flex  bg-white'>
          <div className='w-[100%] flex space-y-3 flex-col justify-center items-center'>
            <img src={items.image.img} className='w-[80%]' alt="" />
            <div className='flex gap-2 w-[80%]'>
              <img src={items.image.img1}  className='h-12' alt="" />
              <img src={items.image.img2}  className='h-12' alt="" />
              <img src={items.image.img3}  className='h-12' alt="" />
              <img src={items.image.img4}  className='h-12' alt="" />
              <img src={items.image.img5}  className='h-12' alt="" />
              <img src={items.image.img6}  className='h-12' alt="" />
              <img src={items.image.img7}  className='h-12' alt="" />
              <img src={items.image.img8}  className='h-12' alt="" />

            </div>
          </div>

          <div className='py-2 space-y-2 w-[100%] '>
            <p> <span className='font-bold'>Names : </span> {items.productName}</p>
            <p><span className='font-bold'>Price : </span>  ₹ {items.price}</p>

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
