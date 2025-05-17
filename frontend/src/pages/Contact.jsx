import React from 'react'
import { asset } from '../assets/asset';
import Title from '../Components/Title';
import NewsLetterBox from '../Components/NewsLetterBox';

const Contact = () => {
  return (
    <div>

      <Title text1='Contact ' text2='Us'/>
    <div className='pt-8 text-xl border bg-gray-100 w-full flex flex-col md:flex-row justify-center items-center h-auto gap-12'>
      <div>
        <img src={asset.clothes} alt='noImg' className='w-full md:max-w-[480px] object-cover '/>
      </div>
      <div>
     <b>Our Store</b>
     <p className='text-gray-600'> 40021 Hurkha Street  <br/> Dhulikhel,KavrePalanchowk</p>
     <p className='text-gray-600 mb-8'> Phone: (+977) 9863624611  <br/> Email:sureshstha147@gmail.com</p>
     <b className='text-gray-800  '>Career Forever </b> 
     <p className='my-4 text-sm'> Learn more about jobs and and teams</p>
     <button className='text-sm py-2 px-4 mt-4 hover:bg-black hover:text-white transiton-all ease-in-out border border-gray-600 duration-500'>Explore More </button>
     
      </div>
    </div>
    <NewsLetterBox/>
    </div>
  )
}

export default Contact;