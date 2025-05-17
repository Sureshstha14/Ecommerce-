import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'

const Login =  ({setToken}) => {
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin',{email,password})
            if(response.data.success){
              setToken(response.data.token)
            }
            else{
                toast.error(response.data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error(response.data.message)
        }
    }
  return (
    <div className='min-h-screen'>
        <div className='flex justify-center items-center gap-4 pt-12 '>
        <h1  className='text-2xl md:text-3xl font-semibold px-4 '>Admin Panel</h1>
        <p className='h-1 min-w-[16%] bg-slate-500'></p>
        </div>
        <hr/>
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center items-center'>

            <div className='flex flex-col justify-center items-center gap-4 w-[24%] shadow-md border-2 mt-8 py-12 px-8 mx-4'>
            <div>
                <p className='text-sm font-medium  '>Email Address</p>
                <input  onChange={(e)=>setEmail(e.target.value)} value={email} type='email' placeholder='Enter Email' className='rounded-md w-full px-2 py-1 border border-slate-600 ' required ></input>
            </div>
            <div>
                <p className='text-sm font-medium '>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Enter Password' className='rounded-md w-full px-2 py-1 border border-slate-600' required></input>
            </div>
            <button type='submit' className='bg-slate-800 px-8 py-2 text-sm text-white rounded-sm shadow-md'> Login</button>
            </div>
            </div>
        </form> 
    </div>
  )
}

export default Login