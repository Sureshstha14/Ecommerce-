import React from 'react'
import { asset } from '../assets/asset'
import Title from '../Components/Title'

const About = () => {
  return (
    <div>

      <div className='flex flex-col sm:flex-row  justify-between item-center gap-4  h-screen mt-12 mb-4 w-full'>
       <div className='bg-gray-600 px-8 py-4 w-1/2'>
        <img src={asset.clothes} className=' h-[400px]'/> 
       </div>
       {/* Right section  */}
       <div className=' w-1/2'>
         <Title text1='About' text2='Us' />
         {/* <p className='h-[1px] mt-4  bg-gray-700'></p> */}
         <p className='mb-4 mt-8  py-8 border-t border-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum non reprehenderit veritatis
           eos delectus eligendi in, possimus doloribus maxime, beatae nesciunt architecto voluptas consequuntur nobis? Facilis doloremque provident inventore voluptatibus.</p>
         <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima eligendi sapiente ducimus odit totam explicabo. Quia fuga obcaecati atque vel ipsum tenetur sed eum, repellendus fugiat ut
           libero corporis?</p>
           <b className='uppercase mt-8'>Our mission </b>
           <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum labore consequatur dolorum magni maxime odit ex dolorem odio recusandae reprehenderit a quas </p>
       </div>
    </div>
       <div className='my-8 ' >
        <div>
          <Title text1='Why' text2='Us'/>
        </div>
        <div className='flex justify-between items-center gap-4 py-4 px-6 mt-8'>
        <div className='border border-gray-400 py-2 px-4 text-center  flex flex-col gap-4'>
          <b>Quality Assurance</b>
          <p  className='text-gray-600'>We offer quality goods and product.Freshly shipped or produced locally.</p>
        </div>
        <div className='border border-gray-400 py-2 px-4 text-center flex flex-col gap-4 '>
          <b>24/7 Customer Support </b>
          <p  className='text-gray-600'>We offer quality support and help to our customer incase of doubt and trouble  .Freshly shipped or produced locally.</p>
        </div>
          <div className='border border-gray-400 py-2 px-4 text-center flex flex-col gap-4'>
            <b>Quality Assurance</b>
            <p className='text-gray-600' >We offer quality goods and product.Freshly shipped or produced locally.</p>
          </div>
        </div>

       </div>
      </div>
  )
}

export default About