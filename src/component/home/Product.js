import React, { useState } from 'react'
import { FaArrowsToDot } from "react-icons/fa6";



function Product() {

    const [hoveredProduct, setHoveredProduct] = useState(null);



    const products = [
        {
            id: 1,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-06-01.jpg/2279153000000070032/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$30.00"
        },
        {
            id: 2,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-08-05.jpg/2279153000000071019/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$13.00"
        },
        {
            id: 3,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-07-04.jpeg/2279153000000069979/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$10.00"
        },
        {
            id: 4,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-05-01.jpg/2279153000000070016/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$10.00"
        },
        {
            id: 5,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-04-01.jpg/2279153000000069945/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 6,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-10-01.jpg/2279153000000071085/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 7,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-09-01.jpg/2279153000000070046/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$14.00"
        },
        {
            id: 8,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-03-01.jpg/2279153000000069923/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$9.00"
        }
    ]
    return (
        <div className='bg-blue-50 h-min-screen'>
            <h1 className='text-center text-4xl font-bold p-12 font-Playfair'>All Product</h1>
            <div className='flex items-center justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:w-[77%] font-Raleway'>
                    {products.map((cardInfo) => (
                        <div key={cardInfo.id} className='relative' onMouseMove={() => setHoveredProduct(cardInfo.id)} onMouseLeave={() => setHoveredProduct(null)} >
                            <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === cardInfo.id ? 'hidden' : ''}`}>
                                <img src={cardInfo.image} alt="" className='p-2 w-screen md:px-0 xl:p-2' />
                                <div className='border-t border-gray-300'>
                                    <p className='m-2 font-semibold 2xl:text-2xl'>{cardInfo.productName}</p>
                                    <p className='mt-12 m-2'>{cardInfo.price}</p>
                                </div>
                            </div>

                            <div className={`absolute top-0 bg-black opacity-70 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== cardInfo.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === cardInfo.id ? 'calc(100% - 25px)' : '0' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='font-semibold 2xl:text-2xl'>{cardInfo.productName}</p>
                                    <p className=''>{cardInfo.price}</p>
                                    <button ><FaArrowsToDot /></button>
                                    <button>Add cart</button>
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






