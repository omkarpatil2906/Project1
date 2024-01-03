import React from 'react'
import { useParams } from 'react-router-dom'
import SofaData from '../apiData/SofaData'
import ChairData from '../apiData/ChairData'
import Navbar from '../navbar/Navbar';
function ProductDetails() {
  const { productId } = useParams();
  const product = SofaData.find(product => product.id === parseInt(productId, 10)) || ChairData.find(product => product.id === parseInt(productId, 10));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
            <Navbar/>
      <div className='flex justify-center my-16'>
      <div className='flex w-1/2 '>
        <div >
          <img src={product.image} className='h-[550px]' alt="" />
        </div>

        <div>
          <p>Names:{product.productName}</p>
          <p>Price: {product.price}</p>
        </div>

      </div>
      </div>
    </div>
  );
}

export default ProductDetails
