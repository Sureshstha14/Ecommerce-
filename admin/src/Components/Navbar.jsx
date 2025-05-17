import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between gap-4 bg-slate-200 h-[12vh] items-center px-12 '>
        <img src={assets.adminLogo} className='px-4 py-2 mt-2 w-[124px]' alt='noLogo'/>
        <button onClick={()=>setToken('')} className='bg-slate-700 text-sm  text-white cursor-pointer px-4 pb-1 rounded-full h-[50%]  hover:bg-slate-600 m-2 no-underline '>LogOut</button>

    </div>
  )
}

export default Navbar