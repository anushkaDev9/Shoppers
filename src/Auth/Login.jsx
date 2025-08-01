import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState]=useState('Sign Up')
  const onSubmitHandler=async(event)=>{
   event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler()} className='flex  flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
               <p className=' text-3xl '>{currentState}</p>
               <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentState ==='Login'? '':<input type="text" className='w-full px-3 py-2 border border-gray-300 rounded-md ' placeholder='Name' required/>}
         <input type="email" className='w-full px-3 py-2 border border-gray-300 rounded-md ' placeholder='Email' required/>
          <input type="password" className='w-full px-3 py-2 border border-gray-300 rounded-md ' placeholder='Password' required/>
          <div className='w-full flex justify-between text-sm mt-[-8px]'>
                 <p className='cursor-pointer'>Forgot password?</p>
                 {
                  currentState === 'Login'
                  ? <p className="cursor-pointer" onClick={()=>setCurrentState('Sign Up')}>Create Account</p>
                  :<p className="cursor-pointer" onClick={()=>setCurrentState('Login')}>Already have an account?</p>
                 }
          </div>
          <button className='bg-black text-white font-light px-8 py-2 mt cursor-pointer'>{currentState==='Login' ?'Sign In':"Sign Up"}</button>
      </form>
  )
}

export default Login