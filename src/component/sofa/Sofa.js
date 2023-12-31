import React, { createContext, useState } from "react";
import Navbar from "../navbar/Navbar";
import { FaArrowsToDot } from "react-icons/fa6"; 
import PopCard from "../popcard/PopCard";

const context = createContext();


function Sofa() {

    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const handleProductClick = (product) => {
        setSelectedProduct(product);
      };

    const initialSofa = [

        {
            id: 1,
            image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
            productName: 'zlfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNvZmF8ZW58MHx8MHx8fDA%3D",
            productName: 'Aafredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNvZmF8ZW58MHx8MHx8fDA%3D",
            productName: 'bAlfredo 1 Seat Sofa',
            price: "$20.00"
        },

        {
            id: 4,
            image: "https://images.unsplash.com/photo-1634822929277-0c51ca0e8846?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"

        },

        {
            id: 5,
            image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },


        {
            id: 6,
            image: "https://images.unsplash.com/photo-1636651430146-00b72284bfbb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },

        {
            id: 7,
            image: "https://images.unsplash.com/photo-1615887584283-91f1be7fdc34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1689414126346-b21dfbc308de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxzb2ZhJTIwc3FhdXJlfGVufDB8fDB8fHww",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$10.00"
        },
        {
            id: 9,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-06-01.jpg/2279153000000070032/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$30.00"
        },
        {
            id: 10,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-04-01.jpg/2279153000000069945/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
        {
            id: 11,
            image: "https://living-mode-demo.zohocommerce.com/product-images/product-image-10-01.jpg/2279153000000071085/300x300",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$210.00"
        },

        {
            id: 12,
            image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZmF8ZW58MHx8MHx8fDA%3D",
            productName: 'Alfredo 1 Seat Sofa',
            price: "$20.00"
        },
    ]



    const [sofa, setSofa] = useState(initialSofa)

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
        <context.Provider value={{ hoveredProduct, setHoveredProduct, selectedProduct, setSelectedProduct }}>
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
                                <div key={items.id} className="relative"   onMouseEnter={() => setHoveredProduct(items.id)} onMouseLeave={() => setHoveredProduct(null)}>
                                    <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === items.id ? 'hidden' : ''}`} onClick={() => handleProductClick(items)}>
                                        <img src={items.image} alt="" className='w-[400px] h-[400px] md:h-[250px] object-cover p-2  md:px-0 xl:p-2' />
                                        <div className='border-t border-gray-300 '>
                                            <p className='m-2 font-semibold 2xl:text-2xl '>{items.productName}</p>
                                            <div className="flex justify-between mt-7">
                                                <p className='m-2'>{items.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`absolute top-0 bg-black opacity-70 text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>

                                        <div className='flex flex-col gap-5 justify-center items-center'>
                                            <p className='font-semibold 2xl:text-2xl'>{items.productName}</p>
                                            <p className=''>{items.price}</p>
                                            <button onClick={() => handleProductClick(items)}><FaArrowsToDot /></button>
                                            <button>Add cart</button>
                                        </div>

                                    </div>
                                    {selectedProduct && <PopCard product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </context.Provider>
    )
}

export default Sofa

