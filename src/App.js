
import React, { createContext, useEffect, useState } from 'react'
import RoutingPages from './component/rounting/RoutingPages';
import Swal from 'sweetalert2';
import Loader from './component/loader/Loader';

export const MyContext = createContext()

function App() {
  const [cartItems, setCartItems] = useState([])
  const [loader, setLoader] = useState(true);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleViewProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  const haddleRemoveProduct = (product) => {
    let ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }
    else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  }

 const removeUniqueProduct = (index) => {
  setCartItems(cartItems.filter((item, i) => i !== index));
};


  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2500)
  })


  return (
    <div>
      <MyContext.Provider value={{ cartItems, handleAddProduct, haddleRemoveProduct, removeUniqueProduct, handleViewProduct}}>
        
      {loader ? <Loader />:<RoutingPages />}
       
      </MyContext.Provider>
    </div>
  );
}

export default App;


