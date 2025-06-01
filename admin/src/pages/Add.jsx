import React, { useState } from 'react'
import upload from '../assets/upload.png'
import { backendUrl } from '../App'
import axios from 'axios'
const Add = ({token}) => {
  const [image1,setImage1]=useState(false)
  const [image2,setImage2]=useState(false)
  const [image3,setImage3]=useState(false)
  const [image4,setImage4]=useState(false)

  const [name,setName]= useState('')
  const [description,setDescription]= useState('')
  const [category,setCategory]= useState('Men')
  const [subCategory,setSubCategory]= useState('Topwear')
  const [price,setPrice]= useState(100)
  const [size,setSize] = useState([])
  const [bestseller,setBestseller]= useState(false)

  const handleSubmit = async (e)=>{
try{
  e.preventDefault();
  const formData = new FormData()
  formData.append('name',name)
  formData.append('description',description)
  formData.append('price',price)
  formData.append('category',category)
  formData.append('subCategory',subCategory)
  formData.append('bestseller',bestseller)
  formData.append('size',JSON.stringify(size))

  image1 && formData.append('image1',image1)
  image2 && formData.append('image2',image2)
  image3 && formData.append('image3',image3)
  image4 && formData.append('image4',image4)

  const response = await axios.post(backendUrl+'/api/product/add',formData,{headers:{token}})
  console.log(response.data)
}
catch(error){
console.log(error)
}
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='m-4 text-center text-2xl' >Upload Image</p>
      <div className='flex gap-4 '>

      <div className='border border-gray-200 p-4 mt-4  '>
       <label htmlFor='image1'>
         <img  src={!image1? upload:URL.createObjectURL(image1)} />
         <p className='text-center'>Upload</p>
        <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id='image1' hidden ></input>
       </label>
      </div>
      <div  className='border border-gray-200 p-4 mt-4'>
       <label htmlFor='image2'>
         <img  src={!image2? upload:URL.createObjectURL(image2)} />
         <p className='text-center'>Upload</p>
        <input  onChange={(e)=> setImage2(e.target.files[0])} type='file' id='image2' hidden ></input>
       </label>
      </div>
      <div  className='border border-gray-200 p-4 mt-4'>

       <label htmlFor='image3'>
         <img  src={!image3? upload:URL.createObjectURL(image3)} />
         <p className='text-center'>Upload</p>
        <input  onChange={(e)=>setImage3(e.target.files[0])} type='file' id='image3' hidden ></input>
       </label>
      </div>
      <div  className='border border-gray-200 p-4 mt-4'>
       <label htmlFor='image4' className='mt-4 '>
         <img  src={!image4? upload:URL.createObjectURL(image4)} />
         <p className='text-center'>Upload</p>
        <input   onChange={(e)=>setImage4(e.target.files[0])}  type='file' id='image4' hidden ></input>
       </label>
      </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2 ' type='text' placeholder='Enter Product Name' required></input>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.description)} className='w-full max-w-[500px] px-3 py-2 ' type='text' placeholder='Enter Product Content' required></textarea>
      </div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <p  className='mb-2'>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)}  className='w-full px-3 py-2' >
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kid'>Kid</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub
             Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2' >
            <option value='Topwear'>Topwear</option>
            <option value='Bottomwear'>Bottomwear</option>
            <option value='Footwear'>Footwear</option>
          </select>K
        </div>
        <div>
          <p className='mb-2'> Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2' placeholder='100' type='Number'></input>
        </div>
      </div> 
      <div >
        <p className='mb-2 '>Sizes</p>
        <div className='flex  gap-4'>
          <div onClick={()=>setSize(prev=> prev.includes('S') ? prev.filter(item => item !== 'S'): [...prev,'S'])}>
            <p className={`${size.includes('S')? 'bg-pink-200':'bg-slate-200'} px-3 py-2 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSize(prev=> prev.includes('M') ? prev.filter(item => item !== 'M'): [...prev,'M'])}>
          <p className={`${size.includes('M')? 'bg-pink-200':'bg-slate-200'} px-3 py-2 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSize(prev=> prev.includes('L') ? prev.filter(item => item !== 'L'): [...prev,'L'])}>
          <p className={`${size.includes('L')? 'bg-pink-200':'bg-slate-200'} px-3 py-2 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSize(prev=> prev.includes('XL') ? prev.filter(item => item !== 'XL'): [...prev,'XL'])}>
          <p className={`${size.includes('XL')? 'bg-pink-200':'bg-slate-200'} px-3 py-2 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setSize(prev=> prev.includes('XXL') ? prev.filter(item => item !== 'XXL'): [...prev,'XXL'])}>
          <p className={`${size.includes('XXL')? 'bg-pink-200':'bg-slate-200'} px-3 py-2 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      <div className='mt-4 '>
        <input type='checkbox' onChange={()=>setBestseller(prev =>!prev)} checked={bestseller} id='bestseller' className='px-3'></input>
        <label htmlFor='bestseller'  className='ml-2'>Add to BestSeller</label>
      </div>
      <button className='text-sm px-4 py-2 mt-2 bg-black text-white'>Add</button>
    </form>
  )
} 

export default Add