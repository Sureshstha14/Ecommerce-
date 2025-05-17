import React, { useContext, useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { asset } from '../assets/asset';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';


const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}= useContext(ShopContext)
    const [visible ,setVisible]= useState(false);
    const location = useLocation();
    useEffect(()=>{
if(location.pathname.includes('collection') ){
 setVisible(true)
}
else{
setVisible(false)
}
    },[location])
    useEffect(()=>{
console.log(search)
    },[search])
    return showSearch && visible ? (
        <div className=' flex justify-center m-2 '>
            <div className='inline-flex justify-center items-center border border-gray-400 rounded-lg p-2 h-14  '>
                <input type='text' placeholder='Search' className='rounded-lg h-12  p-2 outline-none' value={search} onChange={(e)=>(setSearch(e.target.value))} />
                <img src={asset.search} className='w-4 py-4 m-1' alt='Search' />
            </div>
            <RxCross2 className='mt-6 ml-2 w-12' onClick={()=>setShowSearch(false)} />
        </div>
    ):null 
}

export default SearchBar