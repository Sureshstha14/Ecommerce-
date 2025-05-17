import React, { useContext, useState } from 'react'
import {asset} from '../assets/asset.js'
import { Link, NavLink } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
    const [visible,setVisible]= useState(false)
   const {showSearch,setShowSearch,getCartCount} = useContext(ShopContext)

  return (
    <div className='flex justify-between items-center px-8 uppercase relative'>
        <Link  to='/'>
        <img src={asset.logo} alt='Logo' className='w-36 object-cover'/>
        </Link>
        <ul className='hidden sm:flex justify-around gap-5 text-sm text-gray-700  w-2/5 '>
         <NavLink className="flex flex-col gap-1 items-center " to='/'>
         <p>Home</p>
         <hr className='w-1/2 h-[1.5px] border-none bg-gray-700 hidden '></hr>
         </NavLink>
         <NavLink className="flex flex-col gap-1 items-center " to='/collection'>
         <p>Collection</p>
         <hr className='w-1/2 h-[1.5px] border-none bg-gray-700 hidden'></hr>
         </NavLink>
         <NavLink className="flex flex-col gap-1 items-center " to='/about'>
         <p>About</p>
         <hr className='w-1/2 h-[1.5px] border-none bg-gray-700 hidden'></hr>
         </NavLink>
         <NavLink className='flex flex-col gap-1 items-center ' to='/contact'>
            <p>Contact</p> 
            <hr className='w-1/2 h-[1.5px] border-none bg-gray-700 hidden'></hr>
         </NavLink>
        </ul>
        <div className='flex gap-6 items-center  w-2/5 justify-end'>
          <img src={asset.search} className='w-8 cursor-pointer' onClick={()=> setShowSearch(!showSearch)} alt='Profile'/>
          
          <div className='group relative '>
          <Link to={'/login'}><img src={asset.profile} className='w-8 cursor-pointer '></img></Link>
           <div className='hidden group-hover:block p-2 dropdown-menu absolute left-[-30px]'>
            <div className='flex flex-col gap-2 w-36 bg-slate-300 text-gray-600 rounded-lg shadow-lg'>
            <p className='text-[8px] p-2 hover:text-black ' >My Profile</p>
            <p className='text-[8px] p-2 hover:text-black '>Orders</p>   
            <p className='text-[8px] p-2 hover:text-black '>LogOut</p>
            </div>

           </div>
          </div>
          <NavLink to='/cart' className='cursor-pointer relative w-8 '>
            <img src={asset.cart} alt='AddtoCart' onClick/> 
            <p className='rounded-lg absolute top-[10px] left-[15px] bg-slate-200 w-1/2 '>{getCartCount()}</p>
          </NavLink>
          <div>
          <CiMenuBurger className='w-12 text-gray-600 sm:hidden ' onClick={()=>{setVisible(true)}}/>
          <div className={` absolute top-0 bottom-0 left-0 flex flex-col items-center gap-4 overflow-hidden h-[400px] bg-gray-100 p-4 ${visible? 'w-full':'hidden'} `}>
 <div>
 <FaChevronLeft onClick={()=>setVisible(false)} />
<p className='text-sm font-mono cursor-pointer' onClick={()=>{setVisible(false)}}>Back</p>
 </div>   
<div className='flex flex-col items-center gap-4 w-full uppercase '>
    <NavLink className='py-4 border pl-2 w-1/2 text-center hover:underline hover:text-black transition-all'to='/'>Home</NavLink>
    <NavLink className='py-4 border pl-2 w-1/2 text-center hover:underline hover:text-black transition-all'to='/collection'>Collection</NavLink>
    <NavLink className='py-4 border pl-2 w-1/2 text-center hover:underline hover:text-black transition-all'to='/about'>about</NavLink>
    <NavLink className='py-4 border pl-2 w-1/2 text-center hover:underline hover:text-black transition-all'to='/contact'>contact</NavLink>

</div>
          </div>
          </div>
          {/* Setting a sideBar */}
        </div>

    </div>
    
  )
}

export default Navbar