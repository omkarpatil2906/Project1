import React, { useContext, useState } from 'react'
import { FaArrowsToDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { MyContext } from '../../App';



function Product() {

    const [hoveredProduct, setHoveredProduct] = useState(null);
    const {handleAddProduct} = useContext(MyContext)

    const products = [
        {
            id: 1,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-06-01.jpg/2279153000000070032/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 2495
        },
        {
            id: 2,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-08-05.jpg/2279153000000071019/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 1081
        },
        {
            id: 3,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-07-04.jpeg/2279153000000069979/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 1497
        },
        {
            id: 4,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-05-01.jpg/2279153000000070016/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 2911
        },
        {
            id: 5,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-04-01.jpg/2279153000000069945/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 3660
        },
        {
            id: 6,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-10-01.jpg/2279153000000071085/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 3410
        },
        {
            id: 7,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-09-01.jpg/2279153000000070046/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 2495
        },
        {
            id: 8,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-03-01.jpg/2279153000000069923/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: 2994
        }
    ]
    return (
        <div className='bg-blue-50 h-min-screen'>
            <h1 className='text-center text-4xl font-bold p-12 font-Playfair'>All Product</h1>
            <div className='flex items-center justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:w-[77%] font-Raleway'>
                    {products.map((items) => (
                        <div key={items.id} className='relative' onMouseMove={() => setHoveredProduct(items.id)} onMouseLeave={() => setHoveredProduct(null)} >
                            <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === items.id ? 'hidden' : ''}`}>
                                <img src={items.image} alt="" className='p-2 w-screen md:px-0 xl:p-2' />
                                <div className='border-t border-gray-300'>
                                    <p className='m-2 font-semibold 2xl:text-2xl'>{items.productName}</p>
                                    <p className='mt-12 m-2'>₹{items.price}</p>
                                </div>
                            </div>

                            <div className={`absolute top-0 bg-black opacity-70 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='font-semibold 2xl:text-2xl'>{items.productName}</p>
                                    <p className=''>{items.price}</p>

                                    <Link to={`/product/${items.id}`} state={{ items }}>
                                        <button><FaArrowsToDot/></button>
                                    </Link>
                                    <Link to="/"><button onClick={() => handleAddProduct(items)}>Add to Cart</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Product


