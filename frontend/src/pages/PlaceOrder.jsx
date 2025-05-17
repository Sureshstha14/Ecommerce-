import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { asset } from '../assets/asset'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)
  useEffect(()=>{
    console.log(method)
  })
  return (
    <div className='flex flex-col lg:flex-row justify-center gap-4 pt-5 sm:pt-14 max-h-[120vh] w-full '>
         <div className='flex flex-col gap-4 justify-center w-full sm:w-1/2'>
          <div className='text-xl sm:text-2xl my-3 w-full'>
            <Title text1='Delivery' text2='Information'/>
          </div>
          <div className='flex gap-4 w-full px-4 text-center mx-2 '>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='text' placeholder='First Name'/>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='text' placeholder='Last Name'/>
          </div>
          <div className=' w-full mx-2 px-4'>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='email' placeholder='Email'/>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded mt-4' type='text' placeholder='Street'/>

          </div>
          <div className='flex gap-4 mx-2 px-4  text-center w-full'>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='text' placeholder='City'/>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='text' placeholder='State'/>
          </div>
          <div className='flex gap-4 w-full px-4 mx-2 text-center '>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='Number' placeholder='Zip-code'/>
              <input className='border border-gray-400 px-1.5 py-3 w-full rounded ' type='text' placeholder='Country'/>
          </div>
          <div className=' w-full mx-2 px-4'>
              <input className='border border-gray-400  py-3 w-full rounded mb-8' type='Number' placeholder='PhoneNumber'/>
              </div>
         </div>
         {/* Right side  */}
         <div className=' w-full sm:w-1/2 '>
            <div className='flex justify-center items-center gap-4'>
                 <CartTotal/>
            </div>
            <div   className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
              <div onClick={()=>setMethod('esewa')} className='flex items-center gap-4 border p-2 px-3 cursor-pointer '>
                <p className={`min-w-4 h-4 border rounded-full ${method === 'esewa'? 'bg-green-400':''}`}></p>
                 <img className='h-6 mx-4 ' src={asset.logo} alt='noImg'/>
              </div>
              <div onClick={()=>setMethod('imepay')} className='flex items-center gap-4 border p-2 px-3 cursor-pointer '>
                <p className={`min-w-4 h-4 border rounded-full ${method === 'imepay'? 'bg-green-400' :''}`}></p>
                 <img className='h-6 mx-4 ' src={asset.logo} alt='noImg'/>
              </div>
              <div onClick={()=>setMethod('cod')} className='flex items-center gap-4 border p-2 px-3 cursor-pointer '>
                <p className={`min-w-4 h-4 border rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
                <p className='text-gray-500 text-sm font-medium uppercase'>Cash on delivery</p>
              </div>
            </div>
              <div className='text-end w-3/4 mt-8'>
                <button onClick={()=>navigate('/orders')} className='px-6 font-medium py-4 text-white bg-black hover:bg-gray-700'>Order</button>
              </div>
                
         </div>
    </div>
  )
}

export default PlaceOrder