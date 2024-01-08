import React, { useContext, useEffect, useState } from 'react';
import { useLocation , Link} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { MyContext } from '../../App';

function ProductDetails() {
  const {handleAddProduct} = useContext(MyContext)
  const { state } = useLocation();
  const { items } = state || {};
  const [selectedImage, setSelectedImage] = useState(items.image.img);
  

  //rating star use mui
  const [hover, setHover] = React.useState(-1);
  const [value, setValue] = React.useState(2);

  



  const handleThumbnailClick = (thumbnail) => {
    setSelectedImage(thumbnail);
  };



  useEffect(() => {
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
            <img src={selectedImage} className='w-[300vh] ' alt="" />
            <div >
              <div  id="slider" style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} className='flex gap-2 w-[100%]'>
                <button id="slideLeft"  onClick={handleSlideLeft}></button>
                <img src={items.image.img1} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img1)} />
                <img src={items.image.img2} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img2)} />
                <img src={items.image.img3} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img3)} />
                <img src={items.image.img4} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img4)} />
                <img src={items.image.img5} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img5)} />
                <img src={items.image.img6} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img6)} />
                <img src={items.image.img7} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img7)} />
                <img src={items.image.img8} className='h-12' alt="" onClick={() => handleThumbnailClick(items.image.img8)} />
                <button id="slideRight"  onClick={handleSlideRight}></button>
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
              <Link to="/"><button className=' border  border-[#222831] p-2 px-3 lg:px-5 font-Raleway' onClick={() => handleAddProduct(items)}>ADD TO CART</button></Link>
              <button className=' border border-black bg-[#222831] text-white p-2 px-6 font-Raleway lg:px-12'>BUY NOW</button>
            </div>

            <hr />

            <div>
              <h1 className='font-bold font-Playfair text-xl'>Product Details</h1>
              <div className='grid grid-cols-2 gap-7 text-xs font-Libre'>
                <div className='py-3'>
                  <h1 className='font-bold'>Brand</h1>
                  <p className=' text-slate-600'>{items.productDetails.brand}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Assembly</h1>
                  <p className=' text-slate-600'>{items.productDetails.assembly}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Dimensions (In Centimeters)</h1>
                  <p className='text-slate-600'>{items.productDetails.dimensionCM}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Dimensions (in Inches)</h1>
                  <p className='text-slate-600'>{items.productDetails.dimensionIC}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Primary Material</h1>
                  <p className='text-slate-600'>{items.productDetails.material}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Room Type</h1>
                  <p className='text-slate-600'>{items.productDetails.room}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Seating Height</h1>
                  <p className='text-slate-600'>{items.productDetails.height}</p>
                </div>

                <div>
                  <h1>Warranty</h1>
                  <p className='text-slate-600'>{items.productDetails.warranty}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Weight</h1>
                  <p className='text-slate-600'>{items.productDetails.weight}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Sku</h1>
                  <p className='text-slate-600'>{items.productDetails.sku}</p>
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
