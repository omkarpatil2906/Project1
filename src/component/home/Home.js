import React from 'react';
import Navbar from '../navbar/Navbar';
import Home2 from './Home2'
import Product from './Product';
import Collection from './Collection';
import BestCollection from './BestCollection';
import Furniture from './Furniture';

function Home() {
  return (
    <div>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://static.zohocdn.com/sites/stock-images/images/zpstock-image-735.png)' }}>
      <div className="relative bg-[#87ceeb] bg-opacity-80 min-h-screen">
        <Navbar />
        <div className="grid my-16 lg:my-5 xl:grid-cols-2 gap-12 lg:w-10/12 justify-center items-center lg:mx-28 p-8 md:p-16">
          <div className="">
            <h1 className=" text-2xl md:text-4xl  lg:text-5xl  2xl:my-8 font-Robot mb-4">Home Decor is a</h1>
            <h1 className=" text-5xl font-bold md:text-4xl lg:text-6xl 2xl:text-8xl 2xl:my-8 font-Libre mb-4">Soul Statement</h1>
            <p className=" md:text-lg lg:text-2xl 2xl:text-6xl font-Raleway mb-4">Your home is where your heart resides. Setting up your soul in your home space is like creating a sanctuary for yourself, outside of your body.</p>
            <button className="bg-black text-white p-2 px-8 md:py-3 border rounded-lg md:px-12 text-sm 2xl:my-8  2xl:text-4xl md:text-2xl font-Raleway">Browse Now</button>
          </div>

          <div className="">
            <img src="https://static.zohocdn.com/sites/stock-images/images/zpstock-image-736.jpg" className="w-full h-auto" alt="" />
          </div>
        </div>
      </div>
    </div>

    <Home2/>
    <Product/>
    <Collection/>
    <BestCollection/>
    <Furniture/>
    
    </div>
    
  );
}

export default Home;
