import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import {  useNavigate } from 'react-router-dom'

const CartTotal = () => {
    const {currency,delivery,getCartAmount} = useContext(ShopContext)
    const navigate = useNavigate();
    const handlePayment=()=>{
        navigate('/placeorder')
    }
  return (
    <div>
        <div className='text-2xl'>
            <Title text1='Card' text2='Total'/>
        </div>
        <div className='flex flex-col gap-2 mt-2'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{delivery}</p>
            </div>
             <hr/>
             <div className='flex justify-between'>
                <b>Total</b>
                <b> {currency} {getCartAmount() === 0 ? 0.00:getCartAmount() + delivery}</b>
             </div>
             <div className='w-full text-end'>
                <button className='bg-black text-white text-sm px-4 py-3 mt-4 hover:bg-gray-800' onClick={handlePayment} >Proceed to Payment</button>
             </div>
        </div>
    </div>
  )
}

export default CartTotal