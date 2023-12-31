import React from 'react';

function PopCard({ product, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-[95%]  p-7 relative">
        <button className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-gray-700" onClick={onClose}>
          ✕
        </button>
        {product && (
          <div>
            <div className='grid justify-around items-center mt-4'>
              <img src={product.image} alt="" className='object-cover w-[320px] h-[400px]' />
              <div>
                <p className="text-xl font-bold mb-4">{product.productName}</p>
                <p className="text-lg mb-4">{product.price}</p>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default PopCard;
