import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Title from '../Components/Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const { product ,search,showSearch} = useContext(ShopContext)
  const [showfilter, setShowFilter] = useState(false)
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [sortType,setSortType]= useState('relevant')
  const categoryHandle = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item != e.target.value))
    }
    else {
      setCategory([...category, e.target.value])
    }
  }
  const subcategoryHandle = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory([...subcategory, e.target.value])
    }

  }
  const applySort = ()=>{
   const sortProduct = filterProduct.slice();
   switch(sortType){
    case 'low-high':
      setFilterProduct(sortProduct.sort((a,b)=>(a.price-b.price)));
      break;

    case 'high-low':
      setFilterProduct(sortProduct.sort((a,b)=>(b.price-a.price)));
      break;

   default:
      setFilterProduct(sortProduct)

   } 
  }

  // console.log(subcategory)
  const applyFilter = () => {
    let productCopy = product.slice();
    if( showSearch && search){
      productCopy = productCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if (subcategory.length > 0) {
      productCopy = productCopy.filter(item => subcategory.includes(item.subCategory))
    }
    setFilterProduct(productCopy)
  }
  
  useEffect(() => {
    setFilterProduct(product);
  }, []);
  useEffect(()=>{
applySort()
  },[sortType])
  useEffect(() => {
    applyFilter()
  }, [category, subcategory,search]);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-8 p-4'>
      {/* Filter  */}
      <div className='flex  flex-col  cursor-pointer gap-2 min-w-60'>
        <div className='flex gap-1 items-center'>
          <p className='text-xl sm:text-2xl m-2 ' onClick={() => setShowFilter(!showfilter)}>Filter</p>
          <IoIosArrowForward className={`sm:hidden ${showfilter ? 'rotate-90' : ''}`} />
        </div>
        {/* Category Filter  */}
        <div className={`p-2 flex gap-2 flex-col items-center justify-center  border border-gray-200  ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='text-2xl font-medium mb-3 '>Categories</p>
          <div className='flex flex-col justify-start gap-2 m-1 '>
            <p className='px-4 flex gap-4'>  <input type='checkbox' value={'Men'} onChange={categoryHandle} />Men</p>
            <p className='px-4 flex gap-4'>  <input type='checkbox' value={'Women'} onChange={categoryHandle} />Women</p>
            <p className='px-4 flex gap-4'> <input type='checkbox' value={'Kid'} onChange={categoryHandle} />Kid</p>
          </div>
        </div>
        {/* SubCategory  */}
        <div className={`p-2 flex gap-2 flex-col items-center justify-center  border border-gray-200  ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='text-2xl font-medium mb-3 '>Type</p>
          <div className='flex flex-col justify-start gap-2 m-1 '>
            <p className='px-4 flex gap-4'> <input type='checkbox' onChange={subcategoryHandle} value={'Topwear'} />TopWear</p>
            <p className='px-4 flex gap-4'>  <input type='checkbox'onChange={subcategoryHandle} value={'Bottomwear'} />BottomWear</p>
            <p className='px-4 flex gap-4'>  <input type='checkbox'onChange={subcategoryHandle} value={'Footwear'} />Footwear</p>
          </div>
        </div>

      </div>
      {/* Right-container  */}
      <div className='flex flex-col gap-4 '>
        <div className='flex justify-around gap-8 w-full   px-2'>
          <div>
            <Title text1='All' text2='Collection' />
          </div>
          <div className='mt-2 border border-gray-300'>
            <select onChange={(e)=>{setSortType(e.target.value)}}>
              <option value='relevant'>SortBy:Relevant</option>
              <option value='low-high' >SortBy:Low-High</option>
              <option value='high-low' >High-Low</option>
            </select>
          </div>
        </div>
        {/* Mapping Element  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4'>
          {filterProduct
            .slice()
            .map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
      </div>

    </div>
  )
}

export default Collection