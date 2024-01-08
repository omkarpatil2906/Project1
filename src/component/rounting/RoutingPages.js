
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Sofa from '../sofa/Sofa'
import Chairs from '../chairs/Chairs'
import Contact from '../contact/Contact'
import TermsCondition from '../terms/TermsCondition'
import ProductDetails from '../productdetails/ProductDetails'
import Footer from '../footer/Footer'
import AddToCart from '../addtocart/AddToCart'

function RoutingPages() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sofa' element={<Sofa />} />
        <Route path='/chairs' element={<Chairs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/termsCondition' element={<TermsCondition/>}/>
        <Route path="/sofa/:id" element={<ProductDetails/>} />
        <Route path="/chairs/:id" element={<ProductDetails/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/best_collection/:id" element={<ProductDetails/>} />
        <Route path="/addtocart" element={<AddToCart/>}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default RoutingPages
