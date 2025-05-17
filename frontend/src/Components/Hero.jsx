import React from 'react'
import { asset } from '../assets/asset'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center border border-gray-300'>
        {/* Left Section */}
        <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-4 sm:py-0 text-gray-700'>
            <div className='flex items-center gap-4'>
                <p className='w-8 sm:w-12 h-[2px] bg-gray-500'></p>
                <p className='font-mono  text-xl '>Our Bestseller</p>
            </div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl m-auto prata-regular mt-4 '>Latest Arrival </h1>
            <div className='flex items-center justify-center p-4 gap-4'>
                <p className='text-xl font-mono '>Shop Now</p>
                <p className='w-8 sm:w-12 h-[2px] bg-gray-500'></p>
            </div>
        </div>
        {/* Right Section */}
         <div className='w-full sm:w-1/2 flex items-center justify-center '>
               <img src={asset.pink_sweater} alt='nophoto' className='object-cover'/>
         </div>
    </div>
  )
}

export default Hero