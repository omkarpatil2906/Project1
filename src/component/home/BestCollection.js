import React from 'react'
import { FaArrowsToDot } from "react-icons/fa6";
function BestCollection() {
    const [hoveredProduct, setHoveredProduct] = React.useState(null);
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
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center font-Playfair my-32'>
                <h1 className='text-4xl p-2 font-bold '>Shop Best Our Collection</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:w-[77%]  '>
                    {
                        products.map((cardInfo) => (
                            <div key={cardInfo.id} className='relative' onMouseEnter={() => setHoveredProduct(cardInfo.id)} onMouseLeave={() => setHoveredProduct(null)}>
                            <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === cardInfo.id ? 'hidden' : ''}`}>
                                <img src={cardInfo.image} alt="" className='p-2 w-screen md:px-0 xl:p-2' />
                                <div className='border-t border-gray-300'>
                                    <p className='m-2 font-semibold 2xl:text-2xl'>{cardInfo.productName}</p>
                                    <p className='mt-12 m-2'>{cardInfo.price}</p>
                                </div>
                            </div>

                            <div className={`absolute top-0 bg-black opacity-90 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== cardInfo.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === cardInfo.id ? 'calc(100% - 25px)' : '0' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='font-semibold 2xl:text-2xl'>{cardInfo.productName}</p>
                                    <p className=''>{cardInfo.price}</p>
                                    <button><FaArrowsToDot /></button>
                                    <button>Add cart</button>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BestCollection
