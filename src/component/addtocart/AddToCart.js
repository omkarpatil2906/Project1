
import React, { useContext } from 'react';
import { MyContext } from '../../App';


function AddToCart({ onClose }) {

  const {cartItems, haddleRemoveProduct, handleAddProduct, removeUniqueProduct} = useContext(MyContext)

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price , 0
  );

  let Shipping =0 
  if (cartItems.length >0){
    Shipping = 40
  }


  //use daisyui tailwind css for modal

  return (
    <div>

      <dialog open id="my_modal_3" className="modal bg-white">
      
        <div className="modal-box rounded-none ">

          <h3 className="font-bold text-lg">CARDS</h3>
          
          

            {
              cartItems.map((item,i) => (
                <div  className=' flex justify-between items-center h-20 p-2' key={item.id}>
                    <img src={item?.image.img} className='h-16 w-16' alt="" />
                    <div>
                    <h1>{item?.productName}</h1>
                    <h1>₹{item?.price}</h1>
                    </div>
                    <button onClick={()=> haddleRemoveProduct(item)}>-</button>
                    <div>{item.quantity}</div>
                    <button onClick={()=>handleAddProduct(item)}>+</button>
                    <button onClick={()=>removeUniqueProduct(i)}>delete</button>
                </div>
            ))
            }
        
        <div>
          <p>₹{totalPrice}</p>
          <p>₹{Shipping * cartItems.length}</p>
        </div>
          <div className='flex gap-1'>
            <button className='bg-gray-800 text-white w-full'>₹{totalPrice + Shipping}</button>
            <button className='bg-gray-800 text-white w-full' onClick={onClose}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AddToCart;
