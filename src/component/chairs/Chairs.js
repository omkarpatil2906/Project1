import React, { useContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import { FaArrowsToDot } from "react-icons/fa6";
import initialChairs from '../apiData/ChairData';
import { Link } from 'react-router-dom'
import { MyContext } from '../../App';


function Chairs() {

    const [hoveredProduct, setHoveredProduct] = useState(null)

    const {handleAddProduct} = useContext(MyContext)




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
                        <label className="p-2">Sorted by:-</label><select  onChange={handleOnChage} className="border p-2">
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
                                            <img src={items.image.img} alt="" className='w-[400px] h-[400px] md:h-[250px] object-cover p-2  md:px-0 xl:p-2' />
                                            <div className='border-t border-gray-300 '>
                                                <p className='m-2 font-semibold 2xl:text-2xl'>{items.productName}</p>
                                                <p className='mt-12 m-2'>{items.price}</p>
                                            </div>
                                        </div>

                                        <div className={`absolute top-0 bg-[#454545] text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>

                                            <div className='flex flex-col gap-5 justify-center items-center'>
                                                <p className='font-semibold 2xl:text-2xl text-center w-[80%]'>{items.productName}</p>
                                                <p className=''> ₹{items.price}</p>
                                                <Link to={`/chairs/${items.id}`} state={{ items }}>
                                                    <button><FaArrowsToDot /></button>
                                                </Link>
                                                <Link to="/chairs"><button onClick={() => handleAddProduct(items)} className="bg-blue-950 p-1 px-3 rounded-md text-white">Add to Cart</button></Link>
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
