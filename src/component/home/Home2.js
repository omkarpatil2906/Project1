import React from 'react'

function Home2() {
    return (
        <div className='flex items-center justify-center'>
            <div className='xl:w-10/12 xl:mx-40 2xl:w-[65%] mx-auto 2xl:mt-24'>
                <div className='lg:flex justify-around my-8 2xl:my-0'>
                    <h1 className=' text-center font-extrabold text-2xl lg:w-1/2 2xl:text-6xl 2xl:my-12 lg:border-r-2 lg:border-black font-Playfair'>WELCOME TO OUR STORE</h1> 
                    
                    <p className=' text-center px-12 text-xs  lg:text-xl lg:w-1/2 2xl:my-12 2xl:text-3xl font-Raleway'>We believe home decor is like a fashion statements and furnitures are an accessory.</p>

                </div>

                <div className='m-2 grid lg:grid-cols-2 gap-3 2xl:gap-12 '>
                    <div className='relative h-[220px] lg:h-[66%] '>
                        <img src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-737.jpg" className='h-full w-full object-cover'  alt="" />

                        <div className='absolute  inset-0 flex flex-col items-end justify-center  text-right p-6 lg:p-12'>
                            <h1 className='text-3xl font-bold lg:text-5xl 2xl:text-8xl font-Playfair '>Living Room Decors</h1>
                            <p className='lg:text-xl lg:my-2 xl:my-6 2xl:text-4xl 2xl:my-7 font-Raleway'>Unique and theme based furniture. Comfort and vibrant colors in one.</p>
                            <button className='bg-black text-white p-1 px-4 mt-2 font-Raleway 2xl:text-2xl 2xl:px-12 2xl:my-7 '>Shop Now</button>
                        </div>
                    </div>

                    <div className=''>
                        <div className='relative text-right  h-[220px] lg:h-[66%] '>
                            <img src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-738.jpg" className='h-full w-full object-cover' alt="" />
                            <div className='absolute  inset-0 flex flex-col items-end justify-center  text-right p-6 lg:p-12'>
                                <h1 className='text-3xl font-bold lg:text-5xl 2xl:text-8xl font-Playfair '>Living Room Decors</h1>
                                <p className='lg:text-xl lg:my-2 xl:my-6 2xl:text-4xl font-Raleway'>Unique and theme based furniture. Comfort and vibrant colors in one.</p>
                                <button className='bg-black font-Raleway text-white p-1 px-4 mt-2 2xl:text-2xl 2xl:px-12 2xl:my-7 '>Shop Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2
