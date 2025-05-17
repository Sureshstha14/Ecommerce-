import React from 'react'
import { asset } from '../assets/asset'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

    <div className='flex flex-col sm:grid grid-cols-[4fr_2fr_2fr] gap-8 p-4  rounded-lg '>
        <div>
            <img src={asset.logo} className='w-32 object-cover'/>
            <p className='text-xs sm:text-sm p-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corrupti, praesentium placeat obcaecati dolorum voluptatum ea incidunt</p>
        </div>
        <div>
            <h4 className='text-center text-2xl font-bold m-4'>Srpheonix</h4>
            <ul className='flex flex-col gap-1 text-lg  text-center'>
                <Link to='/'>Home</Link>
                <Link to='/collection'>Collection</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </ul>
        </div>
        <div>
            <h4 className='text-center text-2xl font-bold m-4'>Get in Touch </h4>
            <ul className='flex flex-col gap-1 text-lg  text-center'>
                <li className='font-semibold'>PhoneNumber:<span>986374848</span></li>
                <li className='font-semibold'>Email:<span>sureshstha222@gmail.com</span></li>
            </ul>
        </div>

    </div>
        <div className='text-center p-4'>
            <hr/>
            <p className='text-xs sm:text-sm  py-4'>CopyRight 2024@srpheonix . All Right Reserved.</p>
        </div>
    </ div>
  )
}

export default Footer