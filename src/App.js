

import React, { createContext, useState } from 'react'
import RoutingPages from './component/rounting/RoutingPages';

export const MyContext = createContext()

function App() {
  const [cartItems, setCartItems]= useState([])

    const handleAddProduct = (product) =>{
        const  ProductExist = cartItems.find((item) => item.id === ProductExist.id);

        if(ProductExist){
            setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist , quantity : ProductExist.quantity + 1} : item ))
        }
        else
        {
            setCartItems([...cartItems,{...product, quantity:1}])
            alert("Added Successfuly")
        }
    }

     
//     const haddleRemoveProduct=(product)=>{
//       const ProductEXist = cartItems.find((item)=> item.id === product.id) ;
  
//       if(ProductEXist.quantity === 1){
//         setCartItems(cartItems.filter((item)=>item.id !== product.id))
//       }
//       else{
//         setCartItems(
//           cartItems.map((item)=> item.id === product.id ? {...ProductEXist,quantity:ProductEXist.quantity - 1}:item)
//         )
//       }
//     }
  
  
//     const handleCartCleareance=()=>{
//       setCartItems([])
  
//     }

//     const removeUniqueProduct =(index)=>{
//       setCartItems(cartItems.filter((item,i)=> i !== index ))

// }

  return (
    <div>
       <MyContext.Provider value={{cartItems, handleAddProduct}}>
           <RoutingPages/>
        </MyContext.Provider>
    </div>
  );
}

export default App;


// , handleCartCleareance,haddleRemoveProduct,removeUniqueProduct