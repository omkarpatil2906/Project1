import React from 'react'
import { FaArrowsToDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
function BestCollection() {
    const [hoveredProduct, setHoveredProduct] = React.useState(null);
    const products = [
        {
            id: 1,
            image: {
                img:"",
                img1:"",
                img2:"",
                img3:"",
                img4:"",
                img5:"",
                img6:"",
                img7:"",
                img8:"",
            },
            productName: 'Alfredo 1 Seat Sofa',
            price: 2994 ,

            productDetails:{
                brand:"",
                assembly:"",
                dimensionCM:"",
                dimensionIC:"",
                material:"",
                room:"",
                height:"",
                warranty:"",
                weight:"",
                sku:"",
            }
        },
        {
            id: 2,
            image: {
                img:"",
                img1:"",
                img2:"",
                img3:"",
                img4:"",
                img5:"",
                img6:"",
                img7:"",
                img8:"",
            },
            productName: 'Alfredo 1 Seat Sofa',
            price: 2994 ,

            productDetails:{
                brand:"",
                assembly:"",
                dimensionCM:"",
                dimensionIC:"",
                material:"",
                room:"",
                height:"",
                warranty:"",
                weight:"",
                sku:"",
            }
        },
        {
            id: 3,
            image: {
                img:"",
                img1:"",
                img2:"",
                img3:"",
                img4:"",
                img5:"",
                img6:"",
                img7:"",
                img8:"",
            },
            productName: 'Alfredo 1 Seat Sofa',
            price: 2994 ,

            productDetails:{
                brand:"",
                assembly:"",
                dimensionCM:"",
                dimensionIC:"",
                material:"",
                room:"",
                height:"",
                warranty:"",
                weight:"",
                sku:"",
            }
        },
        {
            id: 4,
            image: {
                img:"",
                img1:"",
                img2:"",
                img3:"",
                img4:"",
                img5:"",
                img6:"",
                img7:"",
                img8:"",
            },
            productName: 'Alfredo 1 Seat Sofa',
            price: 2994 ,

            productDetails:{
                brand:"",
                assembly:"",
                dimensionCM:"",
                dimensionIC:"",
                material:"",
                room:"",
                height:"",
                warranty:"",
                weight:"",
                sku:"",
            }
        },
    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center font-Playfair my-32'>
                <h1 className='text-4xl p-2 font-bold '>Shop Best Our Collection</h1>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:w-[77%]  '>
                    {
                        products.map((items) => (
                            <div key={items.id} className='relative' onMouseEnter={() => setHoveredProduct(items.id)} onMouseLeave={() => setHoveredProduct(null)}>
                            <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === items.id ? 'hidden' : ''}`}>
                                <img src={items.image} alt="" className='p-2 w-screen md:px-0 xl:p-2' />
                                <div className='border-t border-gray-300'>
                                    <p className='m-2 font-semibold 2xl:text-2xl'>{items.productName}</p>
                                    <p className='mt-12 m-2'>{items.price}</p>
                                </div>
                            </div>

                            <div className={`absolute top-0 bg-black opacity-90 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='font-semibold 2xl:text-2xl'>{items.productName}</p>
                                    <p className=''>{items.price}</p>
                                    <Link to={`/best_collection/${items.id}`} state={{ items }}>
                                        <button><FaArrowsToDot /></button>
                                    </Link>
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
