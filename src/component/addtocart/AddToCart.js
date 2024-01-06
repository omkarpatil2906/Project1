
import React, { useContext } from 'react';
import { MyContext } from '../../App';


function AddToCart({ onClose }) {

  const {cartItems,haddleRemoveProduct,handleAddProduct,removeUniqueProduct} = useContext(MyContext)


  //use daisyui tailwind css for modal

  return (
    <div>

      <dialog open id="my_modal_3" className="modal bg-white">
      
        <div className="modal-box rounded-none ">

          <h3 className="font-bold text-lg">CARDS</h3>
          
          

            {
              cartItems.map((item) => (
                <div  className=' flex justify-between items-center h-20 p-2' key={item.id}>
                    <img src={item.image} className='h-16 w-16' alt="" />
                    <h1>{item.productName}</h1>
                </div>
            ))
            }
        

          <div className='flex gap-1'>
            <button className='bg-gray-800 text-white w-full'>Order</button>
            <button className='bg-gray-800 text-white w-full' onClick={onClose}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AddToCart;
