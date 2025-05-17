import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState] = useState('SignUp');
  const submitHandler = (e)=>{
         e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96  mt-14 m-auto  gap-4'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
         <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      <input type='text' className={`w-full px-3 py-2 border border-gray-800 ${currentState === 'Login'? 'hidden':'w-full'}`} placeholder='Name' />
      <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='flex justify-between items-center gap-4 w-full'>
        <p className='text-sm'>Forget your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('SignUp') } className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login') } className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white px-4 py-2 mt-4 font-light'>{currentState === 'Login'?'Sign In':'Sign Up'}</button>
      </form>
    </div>
  )
}

export default Login