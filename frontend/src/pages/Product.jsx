import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { product_id } = useParams();
  const [productData, setProductData] = useState()
  const { product, currency,addtoCart, getCart} = useContext(ShopContext)
  const [image, setImage] = useState('')
  const [sizes,setSizes] = useState('')
  console.log(sizes)
  const filterProducts = async () => {
    const foundProduct =   product.find(item=> item._id === product_id)
    if(foundProduct){
      setProductData(foundProduct)
      setImage(foundProduct.image[0])
    }
    else{
      setProductData(null)
    }
    // product.map((item) => {
    //   if (item._id === product_id) {
    //     setProductData(item)
    //     setImage(item.image[0])
    //     console.log(image)
    //     return null
    //   }
    // })
  }
  useEffect(() => {
    filterProducts();
  }, [product_id])
  return productData ? (
    <div className='flex h-[700px] relative mt-4 w-full '>
      <div className='flex justify-between items-center gap-4  w-[80%] h-full'>
        <div className='flex justify-center items-start w-[20%] flex-wrap gap-4 p-4 m-4'>
          {productData.image.map((item, index) => (
            <img src={item} alt='noImg' key={index} className='object-cover h-1/2 ' onClick={()=>setImage(item)} />
          ))}
        </div>
        <div className='w-[80%] p-4 m-2 overflow-hidden h-[600px] '>
          <img src={image} alt='noimg' className='object-cover max-h-full max-w-full rounded-lg shadow-lg transition-all duration-300'
 />

        </div>
      </div>
      <div className='flex flex-col justify-center gap-4 text-gray-700 text-2xl md:text-3xl font-semibold '>
        <p >{productData.name}</p>
        <p>{productData.description}</p>
        <p className='flex gap-2'>{currency}<span className='text-red-500'>{productData.price}</span></p>
        <div className='flex gap-4 '>
        {
          productData.sizes.map((item)=>(
            <button onClick={()=>setSizes(item)} className={`border w-8 ${item === sizes ? 'border-yellow-600':'' } rounded-lg`} >{item}</button>
          ))
        }
        </div>  
        
        <button onClick={()=>addtoCart(productData._id,sizes)} className='bg-slate-800 text-white text-[16px] p-2 active:bg-slate-700 mt-8 w-[32%] rounded-lg ' >Add to Cart</button>
        <hr className='mt-4 w-full h-[4px]'></hr>
      </div>
    </div>
  ) :
    <div>
      <h1>No selected image..</h1>
    </div>
}

export default Product