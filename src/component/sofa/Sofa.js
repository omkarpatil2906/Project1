import React, { useContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { FaArrowsToDot } from "react-icons/fa6";
import initialSofa from "../apiData/SofaData";
import { Link } from 'react-router-dom'
import { MyContext } from "../../App";



function Sofa() {

    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [sofa, setSofa] = useState(initialSofa)
    const {handleAddProduct} = useContext(MyContext)

    const handleOnChage = (e) => {
        const sortType = e.target.value;

        if (sortType === "AtoZ") {
            const sortedSofa = initialSofa.slice().sort((a, b) => a.productName.localeCompare(b.productName))

            setSofa(sortedSofa)
        }

        if (sortType === "ZtoA") {
            const sortedSofa = initialSofa.slice().sort((a, b) => b.productName.localeCompare(a.productName));
            setSofa(sortedSofa)

        }

        if (sortType === "lowTohigh") {
            const sortedSofa = initialSofa.slice().sort((a, b) =>
                parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
            );
            setSofa(sortedSofa)

        }

        if (sortType === "highTolow") {
            const sortedSofa = initialSofa.slice().sort((a, b) =>
                parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
            );
            setSofa(sortedSofa)

        }

    }
    return (
        <div>
            <div className="lg:shadow-md ">
                <Navbar />
            </div>
            <div className="flex justify-center items-center">
                <div className=" grid  mt-5  lg:mt-24 m-2 sm:grid-cols-2 gap-2 md:w-[75%]">
                    <div className=" flex flex-col justify-center bg-[#222831] text-white p-3 lg:p-12 ">
                        <h1 className="font-bold xl:text-xl">Sofa</h1>
                        <p className="text-justify ">Nothing like cudding on friday night.under a blanket with a tub of popcorn. Choosen from love-seates to make-shift sofas. They are definitly the most comfortable ones in town</p>
                    </div>
                    <div>
                        <img src="https://living-mode-demo.zohocommerce.com/category-images/category-sofa.png/2279153000000071107/500x500" className="h-full w-full" alt="" />
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
                            sofa.map((items) => (
                                <div key={items.id} className="relative" onMouseEnter={() => setHoveredProduct(items.id)} onMouseLeave={() => setHoveredProduct(null)}>
                                    <Link to={`/sofa/${items.id}`} state={{ items }}>

                                        <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === items.id ? 'hidden' : ''}`} >
                                            <img src={items.image} alt="" className='w-[400px] h-[400px] md:h-[250px] object-cover p-2  md:px-0 xl:p-2' />
                                            <div className='border-t border-gray-300 '>
                                                <p className='m-2 font-semibold 2xl:text-2xl '>{items.productName}</p>
                                                <div className="flex justify-between mt-7">
                                                    <p className='m-2'>{items.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className={`absolute top-0 bg-black opacity-70 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>

                                        <div className='flex flex-col gap-5 justify-center items-center'>
                                            <p className='font-semibold 2xl:text-2xl'>{items.productName}</p>
                                            <p className=''>{items.price}</p>
                                            <Link to={`/sofa/${items.id}`} state={{ items }}>
                                                <button><FaArrowsToDot /></button>
                                            </Link>
                                            
                                            <Link to="/"><button onClick={() => handleAddProduct(items)} >Add to Cart</button></Link>
                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sofa

