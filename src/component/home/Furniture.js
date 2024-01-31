import React from 'react'

function Furniture() {
    return (
        <div>
            <div className='relative h-96 flex flex-col justify-center items-center'>
                <img src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-740.jpg" className='w-full h-full' alt="" />
                <div className="absolute w-9/12 flex flex-col justify-center items-center">
                    <h1 className=' font-bold text-5xl text-center my-5 font-Playfair'>Storage Furniture</h1>
                    <p className='text-xl text-center lg:text-2xl font-Raleway'>Bookshelves to shoe racks, cutlery drawers to linen cupboards, you name it and we have it. Your one stop destination for all your storage requirements.</p>
                    <button className='border border-blue-950 font-Raleway p-2 px-5 my-5  hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'>Shop Now</button>
                </div>
            </div>
            <div className='bg-[#f0fdf4] flex flex-col justify-center items-center gap-2 h-72 p-4 lg:flex-row '>
                <h1 className='text-3xl font-bold text-center lg:w-[50%] xl:text-5xl font-Playfair' >Join The Community To Be Updated Firstly?</h1>

                <div className='pb-2'>
                    <div className='lg:flex gap-3 font-Raleway'>
                        <input type="text" placeholder='Name' className='border w-full p-2' />
                        <input type="text" placeholder='Email' className='border w-full p-2' />
                        <button className='bg-blue-950 w-full p-2 font-Raleway text-white'>Subscribe</button>
                    </div>
                    <p>Receive a 10% discount code via email when you sign up for our store offers and updates</p>
                </div>
            </div>
        </div>
    )
}

export default Furniture
