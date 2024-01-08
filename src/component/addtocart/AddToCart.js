
import React, { useContext } from 'react';
import { MyContext } from '../../App';
import Navbar from '../navbar/Navbar';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


function AddToCart({ onClose }) {

  const { cartItems, haddleRemoveProduct, handleAddProduct, removeUniqueProduct } = useContext(MyContext)

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price, 0
  );


    const Shipping = 1000;
  


  //use daisyui tailwind css for modal

  return (
    <div>
      <Navbar />
      <div className=" bg-white  flex  flex-col justify-center items-center font-Raleway">
        <div className='lg:w-7/12'>
          <h1 className='text-center font-bold text-3xl font-Playfair tracking-widest '>CARDS</h1>
          {
            cartItems.map((item, i) => (
              <div className='flex p-5 border' >

              
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

          <div>
            <p>Delivering To</p>
            <input type="text" placeholder='Enter PIN Code' /> <br />



            <div>
              <h1>Cart Summary</h1>
              <hr />
              <h1>Items In Card </h1>
               
            </div>
          </div>
        </div>

      

      </div>
    </div >
  );
}

export default AddToCart;



