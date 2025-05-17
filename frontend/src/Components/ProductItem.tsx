import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
type ProductScript ={
    id:string;
    image:string;
    name:string;
    price:number;
}

const ProductItem = (props:ProductScript) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${props.id}`} className='text-gray-600 cursor-pointer '>
     <div className='overflow-hidden '  >
        <img src={props.image[0]} className='hover:scale-110 transition ease-in-out object-contain h-auto' loading='lazy' alt='ProductItem'/>
     </div>
     <div className='text-center'>
     <p className='text-md py-2'>{props.name}</p>
     <p className='py-1 text-sm font-medium'>{currency}<span className='px-2 '>{props.price}</span></p>
      </div>
    </Link> 
  )
}

export default ProductItem