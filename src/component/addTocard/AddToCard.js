import React ,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Rating from '@mui/material/Rating';

function ProductDetails() {
  const { state1 } = useLocation();
  const { items } = state1 || {};

  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 


  return items ? (
    <div>
      <Navbar/>
      <div>
        <p>{items.price}</p>
      </div>
     
    </div>
  ) : "No item matched/found.";
}

export default ProductDetails;
