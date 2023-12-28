import React from 'react'

function Collection() {
  
    return (
        <div className='flex flex-col  justify-center items-center'>
            <div className='my-7'>
                <h1 className='text-center text-2xl font-bold font-Playfair xl:text-4xl'>What's Hot This Month</h1>
            </div>

            <div className='lg:flex xl:w-[66%] xl:h-[300px] '>
                <div className='bg-white border xl:w-9/12  p-8'>
                    <h1 className='text-2xl font-Robot'>SALE UP TO 35% OFF</h1>
                    <h2 className='text-3xl font-semibold my-2 font-Playfair'>New Sofas and Chairs</h2>
                    <p className='text-xl font-Raleway'>Making seating more comfortable, while preparing your home for the summer with our new range of bright colors</p>
                    <button className='my-5 p-2 px-5 font-Raleway bg-white border border-black hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'>Shop Now</button>
                </div>
               <div className='h-[400px] xl:h-[300px] w-full'>
                <img src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-739.jpg" className='h-full w-full ' alt="" />
               </div>
            </div>
        </div>
    )
}

export default Collection
