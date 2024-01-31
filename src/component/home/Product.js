import React, { useContext, useState } from 'react'
import { FaArrowsToDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { MyContext } from '../../App';



function Product() {

    const [hoveredProduct, setHoveredProduct] = useState(null);
    const { handleAddProduct } = useContext(MyContext)

    const products = [
        {
            id: 1,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-te2uye.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-te2uye.jpg",
                img2: 'https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-1r7bo0.jpg',
                img3: 'https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-o3ig6x.jpg',
                img4: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-mxlq1a.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-mgup50.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-djritq.jpg",
                img7: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-v55squ.jpg",
                img8: "https://ii1.pepperfry.com/media/catalog/product/b/o/1600x800/bonito-velvet-2-seater-sofa-in-wine-colour-bonito-velvet-2-seater-sofa-in-wine-colour-t8xfly.jpg",

            },
            productName: 'Bonito Velvet 2 Seater Sofa in Wine Colour',
            productBrand: 'By Casacraft from Pepperfry',
            price: 36249,

            productDetails: {
                brand: "Casacraft from Pepperfry",
                assembly: "Carpenter Assembly",
                dimensionCM: "H 115 x W 195 x D 120",
                dimensionIC: "H 32.5 x W 55 x D 34",
                material: "Velvet Fabric",
                room: "Living Room",
                height: "17",
                warranty: "36 Months' Warranty",
                weight: "40 KG",
                sku: "FN2125633-S-PM9338",
            }

        },
        {
            id: 2,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/f/u/1250x625/futon-sofa-cum-bed-by-seventh-heaven-in-blue-colour-futon-sofa-cum-bed-by-seventh-heaven-in-blue-col-cpoapf.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/f/u/1250x625/futon-sofa-cum-bed-by-seventh-heaven-in-blue-colour-futon-sofa-cum-bed-by-seventh-heaven-in-blue-col-cpoapf.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/m/i/1250x625/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-j5qoxb.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-ajaubh.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-9w1oth.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-rfb51r.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-od7zts.jpg",
                img7: "https://ii1.pepperfry.com/media/catalog/product/m/i/568x284/milan-fabric-3-seater-sofa-in-sky-blue-colour-milan-fabric-3-seater-sofa-in-sky-blue-colour-v2wfpn.jpg",
                img8: "",

            },
            productName: 'Milan Fabric 3 Seater Sofa in Sky Blue Colour,',
            productBrand: "By Seventh Heaven",
            price: 41599,

            productDetails: {
                brand: "Seventh Heaven",
                assembly: "Self Assembly",
                dimensionCM: "H 81 x W 188 x D 81",
                dimensionIC: "H 31.5 x W 73.5 x D 31.5",
                material: "Fabric",
                room: "Living Room",
                height: 16,
                warranty: "36 Months' Warranty",
                weight: "60 KG",
                sku: "FN1991651-S-PM36418",
            }

        },
        {
            id: 3,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jack-3-seater-sofa-in-grey-colour-by-adorn-homez-jack-3-seater-sofa-in-grey-colour-by-adorn-homez-5if0bz.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jack-3-seater-sofa-in-grey-colour-by-adorn-homez-jack-3-seater-sofa-in-grey-colour-by-adorn-homez-5if0bz.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jack-velvet-3-seater-sofa-in-grey-colour-jack-velvet-3-seater-sofa-in-grey-colour-hloaeg.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jack-velvet-3-seater-sofa-in-grey-colour-jack-velvet-3-seater-sofa-in-grey-colour-66vjv3.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jack-velvet-3-seater-sofa-in-grey-colour-jack-velvet-3-seater-sofa-in-grey-colour-niekws.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/j/a/568x284/jack-velvet-3-seater-sofa-in-grey-colour-jack-velvet-3-seater-sofa-in-grey-colour-qxwygy.jpg",
                img6: "",
                img7: "",
                img8: "",
            },
            productName: 'Jack Velvet 3 Seater Sofa in Grey Colour,',
            productBrand: "By Adorn Homez",
            price: 29953,

            productDetails: {
                brand: "Adorn Homez",
                assembly: "Carpenter Assembly",
                dimensionCM: "Grey",
                dimensionIC: "H 76 x W 198 x D 81",
                material: "H 30 x W 78 x D 32",
                room: "Living Room",
                height: 18,
                warranty: "24 Months' Warranty",
                weight: "30 KG",
                sku: "FN1940017-S-PM18292",
            }

        },

        {
            id: 4,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-corner-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-corner-sect-oi021y.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-corner-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-corner-sect-oi021y.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-dlulxk.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-uadzw2.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-i8gbio.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-3vx4px.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-gu5kjs.jpg",
                img7: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-xr0e38.jpg",
                img8: "https://ii1.pepperfry.com/media/catalog/product/r/o/568x284/royal-sectional-sofa-with--tufted-back-in-beige-colour-by-dreamzz-furniture-royal-sectional-sofa-wit-0dnprg.jpg",

            },
            productName: 'Royal Fabric Corner Sofa in Beige Colour in C Shape',
            productBrand: "By Dreamzz Furniture",
            price: 54399,

            productDetails: {
                brand: "Dreamzz Furniture",
                assembly: "Carpenter Assembly",
                dimensionCM: "H 73.7 x W 223.5 x D 284.5",
                dimensionIC: "H 29 x W 88 x D 112",
                material: "Fabric",
                room: "Living Room",
                height: 17,
                warranty: "12 Months' Warranty",
                weight: "60 KG",
                sku: "FN1668212-S-PM22933",
            }


        },

        {
            id: 5,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--my7vac.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--my7vac.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--s3khk8.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--khbzpr.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--tcxatl.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--my7vac.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--thm8we.jpg",
                img7: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--fejnjv.jpg",
                img8: "https://ii1.pepperfry.com/media/catalog/product/t/o/764x840/touffy-rocking-chair-in-brown-silver-colour-by-dzyn-furnitures-touffy-rocking-chair-in-brown-silver--bbl4r0.jpg",
            },
            productName: 'Touffy Solid Wood Rocking Chair in Beige Colour',
            productBrand: "By DZYN Furnitures",
            price: 24990,

            productDetails: {
                brand: "DZYN Furnitures",
                assembly: "Assembly by Brand (Installation in 72 hours)",
                dimensionCM: "H 99 x W 58 x D 91",
                dimensionIC: "H 39 x W 23 x D 36",
                material: "Teak Wood",
                room: "Living Room",
                height: 12,
                warranty: "6 Months' Warranty",
                weight: "18 KG",
                sku: "FN1963859-S-PM35171",
            }
        },


        {
            id: 6,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/t/u/1100x1210/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--0uruip.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/t/u/1100x1210/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--0uruip.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--webfbw.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-tucson-sheesham-wood-rocking-chair-in-rusti-8bsikx.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--zda9gc.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--0sti3y.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--bx6wqm.jpg",
                img7: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--d9pmwr.jpg",
                img8: "https://ii1.pepperfry.com/media/catalog/product/t/u/764x840/tucson-sheesham-wood-rocking-chair-in-rustic-teak-finish-by-woodsworth-tucson-sheesham-wood-rocking--hdeeq3.jpg",
            },
            productName: 'Tucson Sheesham Wood Rocking Chair in Rustic Teak Finish',
            productBrand: "Woodsworth from Pepperfry",
            price: 18499,

            productDetails: {
                brand: "Woodsworth from Pepperfry",
                assembly: "No Assembly Required",
                dimensionCM: "H 104 x W 56 x D 104",
                dimensionIC: "H 41 x W 22 x D 41 ",
                material: "Sheesham Wood",
                room: "Living Room",
                height: 16,
                warranty: "36 Months' Warranty",
                weight: "23 KG",
                sku: "FM1813879-S-WH34197",
            }
        },

        {
            id: 7,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-juedut.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-juedut.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-fdduys.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-fsyrpy.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-hcnn1d.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-jq0ill.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/b/r/764x840/brenton-solid-wood-rocking-chair-in-brown---dark-blue-colour-brenton-solid-wood-rocking-chair-in-bro-uxbsci.jpg",
                img7: "",
                img8: "",
            },
            productName: 'Brenton Solid Wood Rocking Chair in Brown & Dark Blue Colour',
            productBrand: "Durian",
            price: 12500,

            productDetails: {
                brand: "Durian",
                assembly: "Carpenter Assembly",
                dimensionCM: "H 72 x W 55 x D 77",
                dimensionIC: "H 28.5 x W 21.5 x D 30.5",
                material: "Beech Wood",
                room: "Living Room",
                height: 19.5,
                warranty: "60 Months' Warranty",
                weight: "13 KG",
                sku: "FN1967206-S-PM25634",
            }
        },
        {
            id: 8,
            image: {
                img: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-fnnmyg.jpg",
                img1: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-fnnmyg.jpg",
                img2: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-4t2euw.jpg",
                img3: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-nbpdyr.jpg",
                img4: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-yggjos.jpg",
                img5: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-j3uajp.jpg",
                img6: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-vzxwkn.jpg",
                img7: "https://ii1.pepperfry.com/media/catalog/product/m/e/764x840/memsaab-fabric-rocking-chair-in-green-colour-memsaab-fabric-rocking-chair-in-green-colour-xlfltr.jpg",
                img8: "",
            },
            productName: 'Memsaab Fabric Rocking Chair in Green Colour',
            productBrand: 'By Chumbak',
            price: 26995,

            productDetails: {
                brand: "By Chumbak",
                assembly: "No Assembly Required",
                dimensionCM: "H 89 x W 66 x D 102",
                dimensionIC: "H 35 x W 26 x D 40",
                material: "Fabric",
                room: "Living Room",
                height: 20,
                warranty: "12 Months' Warranty",
                weight: "28 KG",
                sku: "FN1963348-S-PM39425",
            }
        },
    ]
    return (
        <div className='bg-blue-50 h-min-screen'>
            <h1 className='text-center text-4xl font-bold p-12 font-Playfair'>All Product</h1>
            <div className='flex items-center justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:w-[77%] font-Raleway'>
                    {products.map((items) => (
                        <div key={items.id} className='relative' onMouseMove={() => setHoveredProduct(items.id)} onMouseLeave={() => setHoveredProduct(null)} >
                            <Link to={`/product/${items.id}`} state={{ items }}>
                                <div className={`bg-white w-[93%] border border-gray-300 ml-3 my-3 ${hoveredProduct === items.id ? 'hidden' : ''}`}>
                                    <img src={items.image.img} alt="" className='w-[400px] h-[400px] md:h-[250px] object-fit p-2  md:px-0 xl:p-2' />
                                    <div className='border-t border-gray-300'>
                                        <p className='m-2 font-semibold 2xl:text-2xl'>{items.productName}</p>
                                        <p className='mt-12 m-2'>₹{items.price}</p>
                                    </div>
                                </div>
                            </Link>

                            <div className={`absolute top-0 bg-[#454545]  text-white w-[93%] border flex flex-col justify-center cursor-pointer items-center border-gray-300 ml-3 my-3 ${hoveredProduct !== items.id ? 'hidden' : ''}`} style={{ height: hoveredProduct === items.id ? 'calc(100% - 25px)' : '0' }}>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='font-semibold 2xl:text-2xl w-[90%] text-center'>{items.productName}</p>
                                    <p className=''>{items.price}</p>
                                    <Link to={`/product/${items.id}`} state={{ items }}>
                                        <button><FaArrowsToDot /></button>
                                    </Link>
                                    <Link to="/"><button onClick={() => handleAddProduct(items)} className="bg-blue-950 p-1 px-3 rounded-md text-white">Add to Cart</button></Link>
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


