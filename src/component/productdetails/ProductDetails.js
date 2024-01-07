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
    return `${value} Star${value !== 1 ? 's' : ''},${labels[value]}`;
  }

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleSlideLeft = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 180;
    }
  };

  const handleSlideRight = () => {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 180;
    }
  };

  return items ? (
    <div>
      <Navbar />
      <div className='flex justify-center items-center '>
        <div className=' lg:flex  bg-white'>
          <div className='w-[100%] flex space-y-3 flex-col  p-12'>
            <img src={items.image.img} className='' alt="" />
            <div>
              <div id="slider" style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} className='flex gap-2 w-[100%]'>
                <button id="slideLeft" onClick={handleSlideLeft}></button>
                <img src={items.image.img1} className='h-12' alt="" />
                <img src={items.image.img2} className='h-12' alt="" />
                <img src={items.image.img3} className='h-12' alt="" />
                <img src={items.image.img4} className='h-12' alt="" />
                <img src={items.image.img5} className='h-12' alt="" />
                <img src={items.image.img6} className='h-12' alt="" />
                <img src={items.image.img7} className='h-12' alt="" />
                <img src={items.image.img8} className='h-12' alt="" />
                <button id="slideRight" onClick={handleSlideRight}></button>
              </div>
            </div>
          </div>

          <div className=' px-12 lg:px-0 space-y-5 w-[100%] lg:py-12'>

            <p className='font-Raleway'>{items.productName}</p>
            <p className='font-Raleway'>{items.productBrand}</p>
            <p className='font-Libre'> ₹ {items.price}</p>
            <div className='flex gap-2 font-Robot'>
              <Rating name="hover-feedback" value={value} precision={0.5} getLabelText={getLabelText} onChange={(event, newValue) => { setValue(newValue); }} onChangeActive={(event, newHover) => { setHover(newHover); }} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
              {value !== null && (<Box>{labels[hover !== -1 ? hover : value]}</Box>)}
            </div>

            <div className='flex gap-3 py-6'>
              <button className=' border  border-[#87ceeb] p-2 px-3 lg:px-5'>ADD TO CART</button>
              <button className=' border border-black bg-[#87ceeb] p-2 px-6 lg:px-12'>BUY NOW</button>
            </div>

            <hr />

            <div>
              <h1 className='font-bold'>Product Details</h1>
              <div className='grid grid-cols-2 gap-7 text-xs'>
                <div>
                  <h1>Brand</h1>
                  <p>{items.productDetails.brand}</p>
                </div>

                <div>
                  <h1>Assembly</h1>
                  <p>{items.productDetails.assembly}</p>
                </div>

                <div>
                  <h1>Dimensions (In Centimeters)</h1>
                  <p>{items.productDetails.dimensionCM}</p>
                </div>

                <div>
                  <h1>Dimensions (in Inches)</h1>
                  <p>{items.productDetails.dimensionIC}</p>
                </div>

                <div>
                  <h1>Primary Material</h1>
                  <p>{items.productDetails.material}</p>
                </div>

                <div>
                  <h1>Room Type</h1>
                  <p>{items.productDetails.room}</p>
                </div>

                <div>
                  <h1>Seating Height</h1>
                  <p>{items.productDetails.height}</p>
                </div>

                <div>
                  <h1>Warranty</h1>
                  <p>{items.productDetails.warranty}</p>
                </div>

                <div>
                  <h1>Weight</h1>
                  <p>{items.productDetails.weight}</p>
                </div> 
                
                 <div>
                  <h1>Sku</h1>
                  <p>{items.productDetails.sku}</p>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  ) : "No item matched/found.";
}

export default ProductDetails;
