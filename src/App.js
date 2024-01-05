
import { Routes, Route } from 'react-router-dom';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Sofa from './component/sofa/Sofa'
import Chairs from './component/chairs/Chairs';
import Contact from './component/contact/Contact';
import TermsCondition from './component/terms/TermsCondition';
import ProductDetails from './component/productdetails/ProductDetails';
import AddToCart from './component/addtocart/AddToCart';





function App() {

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
      
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
