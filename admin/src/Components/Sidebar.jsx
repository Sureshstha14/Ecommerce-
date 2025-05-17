import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='w-[16%] min-h-screen border-r-2   '>
        <div className=' flex flex-col justify-center items-center gap-4 pl-12 '>
            <NavLink className='flex gap-4 mt-4 px-5 py-2   border border-slate-300 border-r-0' to='/add'> 
            <IoAddCircleOutline className='h-6 w-6 '/>
            <p className='hidden md:block'>Add item</p>
            <hr/>
            </NavLink>
            <NavLink className='flex gap-4 mt-4 px-5 py-2 border border-r-0 border-slate-300' to='/list'> 
            <FaClipboardList className='h-6 w-6 '/>
            <p className='hidden md:block'>List item</p>
            <hr/>
            </NavLink>
            <NavLink className='flex gap-4 mt-4 px-5 py-2 mb-4 border border-slate-300 border-r-0 ' to='/orders'> 
            <IoAddCircleOutline className='h-6 w-6 '/>
            <p className='hidden md:block text-sm '>Order item</p>
            <hr/>
            </NavLink>
        </div >
    </div>
  )
}

export default Sidebar