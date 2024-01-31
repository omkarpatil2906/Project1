import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom'
import { MyContext } from '../../App';


function Navbar() {
  const [open, setOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false);
  const { cartItems } = useContext(MyContext)

  const toggleSearch = () => {
    setShowSearch(!showSearch); 
  };

  return (
    <div className=''>
      <div className='bg-slate-100 flex justify-end  lg:hidden'>
       
      </div>
      <div className='flex bg-white p-5 lg:bg-transparent py-3 justify-between  lg:justify-around items-center 2xl:p-12 font-Raleway font-thin '>
        <div className='flex '>
          <img src="https://living-mode-demo.zohocommerce.com/logo-02.png" className="w-12 h-12 xl:h-16 xl:w-16" alt="" />
          <h1 className='mt-6 lg:text-xl font-bold 2xl:text-3xl'>LIVING Mode</h1>
        </div>
        {/* ----------------------------------------------------------------------------------------------*/}
        
        <button onClick={() => setOpen(!open)} className='flex items-center gap-3 lg:hidden '>
        <Link to="/addtocart" className='z-0'>
            <Badge badgeContent={cartItems.length === 0 ? "" : cartItems.length} color="primary" >
              <ShoppingCartIcon style={{ fontSize: 30 }} />
            </Badge>
        </Link>
          {<MenuIcon style={{ fontSize: 40 }} />}
        </button>
        <ul className={open ? "fixed top-0 left-[20%] h-screen w-[80%] bg-white ease-in-out duration-300 transition-all lg:hidden " : "right-[-100%] w-full fixed  bg-white lg:hidden "}>
         <button onClick={() => setOpen(false)} className='fixed right-0 '><CloseIcon style={{ fontSize: 40 }} /></button>
          <div className='mt-20'>
            <li className='m-2 cursor-pointer border p-3 '><Link to="/">Home</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/sofa">Sofa</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/chairs">Chairs</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/contact">Contact</Link> </li>
            <li className='m-2 cursor-pointer border p-3'><Link to="/termsCondition">Terms and Condition</Link> </li>
          </div>
        </ul>
        {/*  ---------------------------------------------------------------------------------------------- */}
        <ul className="hidden lg:flex lg:justify-between lg:gap-12  text-sm transition-all 2xl:text-2xl ">
          <li className='py-2 px-4  cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/">Home</Link></li>
          <li className='py-2 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/sofa">Sofa</Link></li>
          <li className='py-2 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/chairs">Chairs</Link></li>
          <li className='py-2 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/contact">Contact</Link> </li>
          <li className='py-2 px-4 cursor-pointer rounded-full hover:bg-blue-950 hover:transition-all hover:duration-1000 hover:text-white'><Link to="/termsCondition">T & C</Link></li>
          <li className='flex items-center gap-5'>
            {showSearch && (
              <input type="text" placeholder="Search..." className="outline-none border-b-2 border-blue-950 py-1 px-2" />)}
            <button onClick={toggleSearch}><SearchIcon style={{ fontSize: 30 }} /></button>
            | <Link to="/addtocart">
              <button>
                <Badge badgeContent={cartItems.length === 0 ? "" : cartItems.length} color="success" >
                  <ShoppingCartIcon style={{ fontSize: 30 }} />
                </Badge>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
