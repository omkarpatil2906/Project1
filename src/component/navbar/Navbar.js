import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import AddToCart from '../addtocart/AddToCart';




function Navbar() {
  const [open, setOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);


  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };


  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className=''>
      <div className='bg-slate-100 flex justify-end  lg:hidden'>
        <button onClick={toggleCart} className='pr-2'><ShoppingCartIcon style={{ fontSize: 20 }} /> </button>
      </div>
      <div className='flex bg-white p-5 lg:bg-transparent py-3 justify-between  lg:justify-around items-center 2xl:p-12 font-Raleway font-thin '>
        <div className='flex '>
          <img src="https://living-mode-demo.zohocommerce.com/logo-02.png" className="w-12 h-12 xl:h-16 xl:w-16" alt="" />
          <h1 className='mt-6 lg:text-xl font-bold 2xl:text-3xl'>LIVING Mode</h1>
        </div>

        {/* ----------------------------------------------------------------------------------------------*/}

        <button onClick={() => setOpen(!open)} className='flex lg:hidden '>
          {<MenuIcon style={{ fontSize: 40 }} />}
        </button>
        <ul className={open ? "fixed left-[20%] h-screen top-0 w-[80%] bg-white ease-in-out lg:hidden " : "ease-in-out right-[-100%] w-full fixed  bg-white lg:hidden "}>
          <div className='grid justify-end '>
            <button onClick={() => setOpen(false)}><CloseIcon style={{ fontSize: 40 }} /></button>
          </div>
          <div className='mt-20'>
            <li className='m-2  cursor-pointer border p-3'><Link to="/">Home</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/sofa">Sofa</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/chairs">Chairs</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/contact">Contact</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/termsCondition">Terms and Condition</Link> </li>
          </div>

        </ul>
        {/*  ---------------------------------------------------------------------------------------------- */}
        <ul className="hidden lg:flex lg:justify-between lg:gap-12  text-sm transition-all 2xl:text-2xl ">
          <li className='py-1 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/">Home</Link></li>
          <li className='py-1 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/sofa">Sofa</Link></li>
          <li className='py-1 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/chairs">Chairs</Link></li>
          <li className='py-1 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/contact">Contact</Link> </li>
          <li className='py-1 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/termsCondition">T & C</Link></li>
          <li className='flex items-center gap-5'>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-b-2 border-blue-950 py-1 px-2"
              />
            )}
            <button onClick={toggleSearch}><SearchIcon style={{ fontSize: 30 }} /> </button>
            | <button onClick={toggleCart}><ShoppingCartIcon style={{ fontSize: 30 }} /> </button>
          </li>
        </ul>
      </div>
      {cartOpen && <AddToCart isOpen={cartOpen} onClose={toggleCart} />}

    </div>
  )

}
export default Navbar
