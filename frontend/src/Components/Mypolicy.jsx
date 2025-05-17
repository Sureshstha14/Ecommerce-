import React from 'react'
import { MdCurrencyExchange } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineSupportAgent } from "react-icons/md";
const Mypolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row text-xs sm:text-sm lg:text-base gap-4 items-center justify-around text-center py-8 m-auto '>
        <div className='rounded-lg border text-center flex flex-col items-center gap-4 p-6 justify-center'>
         <MdCurrencyExchange className='text-3xl'/>
         <p className='font-semibold'>Easy exchange policy  </p>
         <p className='text-gray-400'>We offer easy  Exchange policy.</p>
        </div>
        <div className='rounded-lg border  text-center flex flex-col items-center gap-4 p-6 justify-center'>
         <VscWorkspaceTrusted className='text-3xl'/>
         <p className='font-semibold'>7 days Return Policy  </p>
         <p className='text-gray-400'>We offer 7 days Exchange fee.</p>
        </div>
        <div className='rounded-lg border  text-center flex flex-col items-center gap-4 p-6 justify-center'>
         <MdOutlineSupportAgent className='text-3xl'/>
         <p className='font-semibold'>Best Customer service  </p>
         <p className='text-gray-400'>We offer 24/7 customer service.</p>
        </div>
        

    </div>
  )
}

export default Mypolicy