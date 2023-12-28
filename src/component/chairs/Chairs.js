import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import { FaArrowsToDot } from "react-icons/fa6";


function Chairs() {

    const [hoveredProduct, setHoveredProduct] = useState(null)

    const initialChairs = [

        {
            id: 1,
            image: "https://images.unsplash.com/photo-1611464908623-07f19927264e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1545039986-c631605fb605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },

        {
            id: 4,
            image: "https://images.unsplash.com/photo-1578681038576-38d56deadfb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"

        },

        {
            id: 5,
            image: "https://images.unsplash.com/photo-1543775562-fb5294aafcf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxjaGFpcnN8ZW58MHx8MHx8fDA%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },


        {
            id: 6,
            image: "https://images.unsplash.com/photo-1622646780859-2c81d117b185?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },

        {
            id: 7,
            image: "https://images.unsplash.com/photo-1578681038576-38d56deadfb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1545039986-c631605fb605?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1520453714493-d85cdd7b033b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$30.00"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1611167941686-59276fe13a72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1617398071615-d5b53554d16c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },

        {
            id: 12,
            image: "https://images.unsplash.com/photo-1567359755029-04f642e9a88f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },

    ]

    const [chairs, setChairs] = useState(initialChairs)

    const handleOnChage = (e) => {
        const sortType = e.target.value;

        if (sortType === "AtoZ") {
            const sortedChairs = initialChairs.slice().sort((a, b) => a.productName.localeCompare(b.productName)
            )

            setChairs(sortedChairs)
        }

        if (sortType === "ZtoA") {
            const sortedChairs = initialChairs.slice().sort((a, b) => b.productName.localeCompare(a.productName)
            );
            setChairs(sortedChairs)

        }

        if (sortType === "lowTohigh") {
            const sortedChairs = initialChairs.slice().sort((a, b) =>
                parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
            );
            setChairs(sortedChairs)

        }

        if (sortType === "highTolow") {
            const sortedChairs = initialChairs.slice().sort((a, b) =>
                parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
            );
            setChairs(sortedChairs)

        }

    }
    return (
        <div>
            <div className="lg:shadow-md ">

                <Navbar />
            </div>
            <div>

                <div className="flex justify-center items-center">
                    <div className=" grid  mt-5  lg:mt-24 m-2 sm:grid-cols-2 gap-2 md:w-[75%]">
                        <div className=" flex flex-col justify-center bg-[#222831] text-white p-3 lg:p-12 ">
                            <h1 className="font-bold xl:text-xl">Chairs</h1>
                            <p className="text-justify ">Chairs support your back, helping you maintain a comfortable posture. Choose from our wide range of chairs to support all your needs</p>
                        </div>
                        <div>
                            <img src="https://living-mode-demo.zohocommerce.com/category-images/category-chair.jpg/2279153000000070056/500x500" className="h-full w-full" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-end lg:mr-24 my-12">
                        <label className="p-2">Sorted by:-</label><select name="" id="" onChange={handleOnChage} className="border p-2">
                            {/* <option value="">Most Popular</option> */}
                            {/* <option value="">Most Recent</option> */}
                            <option value="highTolow">Price: High To Low</option>
                            <option value="lowTohigh">Price: Low To High</option>
                            <option value="AtoZ">A To Z</option>
                            <option value="ZtoA">Z To A</option>
                        </select>
                    </div>


                    <div className=" flex justify-center items-center">

                        <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:w-[77%] font-Raleway '>

                            {
                                chairs.map((items) => (
                                    <div key={items.id} className="relative" onMouseEnter={() => setHoveredProduct(items.id)} onMouseLeave={() => setHoveredProduct(null)}>

                                        <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === items.id ? 'hidden' : ''}`}>
                                            <img src={items.image} alt="" className='w-[400px] h-[400px] md:h-[250px] object-cover p-2  md:px-0 xl:p-2' />
                                            <div className='border-t border-gray-300 '>
                                                <p className='m-2 font-semibold 2xl:text-2xl'>{items.productName}</p>
                                                <p className='mt-12 m-2'>{items.price}</p>
                                            </div>
                                        </div>

                                        <div className={`absolute top-0 bg-black opacity-70 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>

                                            <div className='flex flex-col gap-5 justify-center items-center'>
                                                <p className='font-semibold 2xl:text-2xl'>{items.productName}</p>
                                                <p className=''>{items.price}</p>
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

            </div>

        </div>
    )
}

export default Chairs
