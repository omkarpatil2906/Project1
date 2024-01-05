
import React from 'react';

function AddToCart({ onClose }) {


  //use daisyui tailwind css for modal

  return (
    <div>

      <dialog open id="my_modal_3" className="modal">
        <div className="modal-box rounded-none h-screen lg:left-[34%] m-0 w-screen relative top-[9%] lg:-top-8">

          <h3 className="font-bold text-lg">CARDs</h3>
          <div className=' flex justify-between items-center h-20 p-2'>
            <img src="https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D" className='h-16 w-16 object-cover' alt="" />
            <h1>Name</h1>
            <button>delete</button>
          </div>

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
