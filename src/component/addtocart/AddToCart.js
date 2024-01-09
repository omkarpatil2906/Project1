
import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
import Navbar from '../navbar/Navbar';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { Link } from 'react-router-dom'


function AddToCart() {

  const { cartItems, haddleRemoveProduct, handleAddProduct, removeUniqueProduct } = useContext(MyContext)
  const [price, setPrice] = useState(0);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price, 0
  );

  const Shipping = 500;

  const handleCheckboxChange = () => {

    const newPrice = price === 0 ? 60 : 0;
    setPrice(newPrice);
  };



  return (
    <div>
      <div className="lg:shadow-md">
        <Navbar />
      </div>
      <div className=" bg-white  flex  flex-col justify-center items-center font-Raleway">
        {cartItems.length === 0 ? (
          <div className='flex flex-col  items-center my-4 font-Raleway'>
            <p className='text-2xl font-bold'>Your Cart is Empty</p>
            <img src="https://ii1.pepperfry.com/assets/w23-empty-cart-060223.jpg" alt="" />

            <p>What would you like to Buy ? Pick from our Best Selling Categories</p>

            <ul className='flex gap-6 mt-5'>
              <li className='underline'><Link to="/sofa">Sofa</Link></li>
              <li className='underline'><Link to="/chair">Chairs</Link></li>
            </ul>
          </div>
        ) : (
          <div>
            <h1 className='text-center font-bold text-3xl font-Playfair tracking-widest '>CARDS</h1>
            <div className='lg:flex gap-5 w-full my-12'>
              {
                cartItems.map((item, i) => (
                  <div className='flex p-5 border w-full' >

                    <div className='w-[100%] space-y-3'>
                      <img src={item.image.img} className='h-32 w-32 lg:h-52 lg:w-[90%]' alt="" />
                      <h1 className='text-sm font-semibold '>Enter PIN Code For Delivery Details</h1>
                      <button className='text-xs border px-5 py-2 lg:w-[90%]  cursor-pointer hover:bg-[#222831] hover:text-white '>Move To Wishlist</button><br />
                      <button className='text-xs border px-12 py-2 lg:w-[90%] cursor-pointer hover:bg-[#222831] hover:text-white' onClick={() => removeUniqueProduct(i)}>Delete</button>
                    </div>

                    <div className='w-[100%] space-y-2 ' >
                      <h1 className='text-xs font-Raleway font-semibold lg:text-xl'>{item.productName}</h1>
                      <h1 className='text-xs  lg:text-lg'>₹{item.price}</h1>
                      <div className='flex gap-3 lg:text-xl'>
                        <button onClick={() => haddleRemoveProduct(item)}><CiCircleMinus /></button>
                        <p>{item.quantity}</p>
                        <button onClick={() => handleAddProduct(item)}><CiCirclePlus /></button>
                      </div>

                      <p className='flex text-xs justify-between lg:text-md'>MRP <span>{totalPrice}</span></p>
                      <hr />
                      <p className='flex justify-between text-xs lg:text-md'>Delivery <span>{Shipping}</span> </p>
                      <hr />
                      <p className='flex font-bold justify-between text-xs lg:text-md'>Total  <span>{totalPrice + Shipping}</span> </p>
                    </div>
                  </div>

                ))
              }

              <div className=' lg:w-[70%] border text-sm p-5 space-y-3'>
                <p className='px-1'>Delivering To</p>
                <input type="text" placeholder='Enter PIN Code' className='p-2 border w-[75%] ' /> <br />

                <div className='px-1  border p-5'>
                  <div className='p-4 space-y-3'>
                  <h1 className='text-center'>Cart Summary</h1>
                  <h1 className='flex justify-between'>Items In Cart <span>1</span> </h1>
                  <hr />
                  <h1 className='flex justify-between'> Cart Total Price <span>{totalPrice + Shipping}</span> </h1>
                  <div className='flex justify-between'>
                    <p><input type="checkbox" onChange={handleCheckboxChange} />Plant a tree for 60 only </p>
                    <span>{price}</span>
                  </div>
                  <h1 className='flex justify-between'> YOU PAY (Inclusive of All Taxes) <span>{totalPrice + Shipping + price}</span> </h1>



                  </div>



                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div >
  );
}

export default AddToCart;



