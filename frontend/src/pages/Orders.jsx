import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title'

const Orders = () => {
    const {currency,product}= useContext(ShopContext)
  return (
    <div className='border pt-16'>
        <div className='text-2xl uppercase'>
            <Title text1='My' text2='Orders'/>
        </div>
        <div>
            {
                product.slice(1,4).map((item,index)=>{

                    return(
                        <div key={index} className='py-4 ml-12 border-t border-b text-gray-700 flex  justify-start
                         items-center'>
                         <div className='flex items-start gap-6 text-sm'>
                            <img className='w-16 sm:w-20 ' src={item.image[0]} alt='noImg' />
    
                         </div>
                         <div className='flex flex-col  ml-4'>
                         <p className='sm:text-base font-medium ml-4'>{item.name}</p>
                         <div className='flex items-center gap-2 mt-2 text-base px-4 py-2 '>
                            <p className='text-lg'>{currency}{item.price}</p>
                            <p>Quantity:1</p>
                            <p>Size:M</p>  
                         </div>
                         <p className='ml-4'>Date<span className='text-gray-400'>20 July,2024</span></p>
                         </div>
                         <div className='md:w-1/2 flex text-center'>
                           <div className='flex items-center gap-2 w-[50%] justify-center'>
                             <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                             <p className='text-xl'>Ready to Ship </p>
                            </div>
                            <div className='flex w-full justify-end ml-12 '>
                       <button className='bg-black px-4 py-2 text-white'>Track Order</button>
                       </div>
                        </div>
    
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default Orders