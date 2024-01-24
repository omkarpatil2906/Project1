import React, { useContext } from 'react'
import { FaArrowsToDot } from "react-icons/fa6";
import {Link} from "react-router-dom"
import { MyContext } from '../../App';
function BestCollection() {
    const [hoveredProduct, setHoveredProduct] = React.useState(null);
    const {handleAddProduct} = useContext(MyContext)
    const products = [
        {
            id: 1,
            image: {
                img:"https://ii1.pepperfry.com/media/catalog/product/t/u/1100x1210/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--0uruip.jpg",
                img1:"https://ii1.pepperfry.com/media/catalog/product/t/u/1100x1210/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--0uruip.jpg",
                img2:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--webfbw.jpg",
                img3:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-tucson-sheesham-wood-rocking-chair-in-rusti-8bsikx.jpg",
                img4:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--zda9gc.jpg",
                img5:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--0sti3y.jpg",
                img6:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--bx6wqm.jpg",
                img7:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--d9pmwr.jpg",
                img8:"https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--hdeeq3.jpg",
            },
            productName: 'Tucson Sheesham Wood Rocking Chair in Rustic Teak Finish',
            productBrand:"Woodsworth from Pepperfry",
            price: 18499 ,
    
            productDetails:{
                brand:"Woodsworth from Pepperfry",
                assembly:"No Assembly Required",
                dimensionCM:"H 104 x W 56 x D 104",
                dimensionIC:"H 41 x W 22 x D 41 ",
                material:"Sheesham Wood",
                room:"Living Room",
                height:16,
                warranty:"36 Months' Warranty",
                weight:"23 KG",
                sku:"FM1813879-S-WH34197",
            }
        },
    
        {
            id: 2,
            image: {
                img:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-juedut.jpg",
                img1:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-juedut.jpg",
                img2:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-fdduys.jpg",
                img3:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-fsyrpy.jpg",
                img4:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-hcnn1d.jpg",
                img5:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-jq0ill.jpg",
                img6:"https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-uxbsci.jpg",
                img7:"",
                img8:"",
            },
            productName: 'Brenton Solid Wood Rocking Chair in Brown & Dark Blue Colour',
            productBrand:"Durian",
            price: 12500,
    
            productDetails:{
                brand:"Durian",
                assembly:"Carpenter Assembly",
                dimensionCM:"H 72 x W 55 x D 77",
                dimensionIC:"H 28.5 x W 21.5 x D 30.5",
                material:"Beech Wood",
                room:"Living Room",
                height:19.5,
                warranty:"60 Months' Warranty",
                weight:"13 KG",
                sku:"FN1967206-S-PM25634",
            }
        },

        {
            id: 3,
            image: {
                img:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-corner-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-corner-sect-oi021y.jpg",
                img1:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-corner-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-corner-sect-oi021y.jpg",
                img2:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-dlulxk.jpg",
                img3:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-uadzw2.jpg",
                img4:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-i8gbio.jpg",
                img5:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-3vx4px.jpg",
                img6:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-gu5kjs.jpg",
                img7:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-xr0e38.jpg",
                img8:"https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-0dnprg.jpg",
             
            },
            productName: 'Royal Fabric Corner Sofa in Beige Colour in C Shape',
            productBrand:"By Dreamzz Furniture",
            price: 54399,
    
            productDetails:{
                brand:"Dreamzz Furniture",
                assembly:"Carpenter Assembly",
                dimensionCM:"H 73.7 x W 223.5 x D 284.5",
                dimensionIC:"H 29 x W 88 x D 112",
                material:"Fabric",
                room:"Living Room",
                height:17,
                warranty:"12 Months' Warranty",
                weight:"60 KG",
                sku:"FN1668212-S-PM22933",
            }
       
    
        },
    
        {
            id: 4,
            image: {
                img:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-b1xbct.jpg",
                img1:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-b1xbct.jpg",
                img2:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-fni3jh.jpg",
                img3:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---magenta-colour-by-dhep-furniture-three-seater-sofa-with-pouf-fkl920.jpg",
                img4:"https://ii1.pepperfry.com/media/catalog/product/3/-/568x284/3-seater-sofa-with-pouffe-in-grey---magenta-colour-by-dhep-furniture-3-seater-sofa-with-pouffe-in-gr-inhi6n.jpg",
                img5:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-qunevp.jpg",
                img6:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-oqtwkc.jpg",
                img7:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-etekxj.jpg",
                img8:"https://ii1.pepperfry.com/media/catalog/product/t/h/568x284/three-seater-sofa-with-pouffe-in-grey---red-colour-by-dhep-furniture-three-seater-sofa-with-pouffe-i-klwoyt.jpg",
            },
            productName: 'Fabric RHS Sectional Sofa in Grey & Magenta Colour',
            productBrand:"By DHEP Furniture",
            price: 57499,
    
            productDetails:{
                brand:"DHEP Furniture",
                assembly:"Carpenter Assembly",
                dimensionCM:"Sofa : H 89.9 x W 268 x D 84.1; Lounger: H 89.9 x W 76.2 x D 160.3",
                dimensionIC:"Sofa: H 35.4 x W 105.5 x D 33.1",
                material:"Fabric",
                room:"Living Room",
                height:15,
                warranty:"12 Months' Warranty",
                weight:"74.5 KG",
                sku:"FN1596468-P-WH5046",
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
                                <img src={items.image.img} alt="" className='w-[400px] h-[400px] md:h-[250px] object-fit p-2  md:px-0 xl:p-2' />
                                <div className='border-t border-gray-300'>
                                    <p className='m-2 font-semibold 2xl:text-2xl'>{items.productName}</p>
                                    <p className='mt-12 m-2'>{items.price}</p>
                                </div>
                            </div>

                            <div className={`absolute top-0 bg-[#454545]  text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='font-semibold 2xl:text-2xl w-[85%] text-center'>{items.productName}</p>
                                    <p className=''>{items.price}</p>
                                    <Link to={`/best_collection/${items.id}`} state={{ items }}>
                                        <button><FaArrowsToDot /></button>
                                    </Link>
                                    <Link to="/"><button onClick={() => handleAddProduct(items)} className="bg-blue-950 p-1 px-3 rounded-md text-white">Add to Cart</button></Link>

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
