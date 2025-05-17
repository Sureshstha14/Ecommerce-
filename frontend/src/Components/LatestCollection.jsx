import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { product } = useContext(ShopContext);
    const [latestproduct, setLatestProduct] = useState([]);
    useEffect(() => {
        setLatestProduct(product.slice(0, 9))
    }, [])
    return (
        <div className='my-4'>
            <div className='text-3xl text-center p-4 m-2 border border-gray-300 flex gap-4 flex-col '>
                <Title text1='Latest' text2='Collection' />
                <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base py-4  rounded-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                {/* Rendering Items */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                    {
                        latestproduct.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
            {/* Best Seller Section */}
            <div className='flex justify-center items-center py-4 m-2 gap-4 flex-col'>
                <Title text1='Best' text2='Seller' />
                <p className=' w-3/4 m-auto text-xs sm:text-sm md:text-base py-4  rounded-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aspernatur, pariatur saepe aut asperiores ullam fugit porro,
                     magnam </p>

                {/* Rendering Items */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                    {
                        latestproduct
                        .filter(item => item.bestseller)
                        .slice(0,5)
                        .map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LatestCollection