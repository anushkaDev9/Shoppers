import React, { useContext } from 'react'
import Title from '../comp/Title'
import CartTotal from '../cart/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'
const PlaceOrder = () => {
    const [method,setMethod]=useState('cod');
    const {navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-200 '>
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
               <div className=' text-xl sm:text-2xl my-3'>
                     <Title text1={'Delivery'} text2={'information'} />
               </div>
               <div className='flex gap-3'>
                          <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='First name'/>
                           <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='Last name'/>
               </div>
               
                  <input type="email" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='Email'/>
<input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='Street'/>
          <div className='flex gap-3  '>
                          <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='City'/>
                           <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='State'/>
               </div>
               <div className='flex gap-3  '>
                          <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='Zip Code'/>
                           <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='Country'/>
               </div>  
                <input type="text" name="" className='border-gray-300 border rounded py-1.5 px-3.5 w-full' placeholder='phone'/>    
        </div>
      <div className='mt-8'>
  <div className='mt-8 min-w-80'>
    <CartTotal />
  </div>

  <div className='mt-12'>
    <Title text1={'payment'} text2={'method'} />

    <div className='flex flex-col gap-3 lg:flex-row'>
      {/* Stripe */}
      <div
        className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'
        onClick={() => setMethod('stripe')}
      >
        <p
          className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
            method === 'stripe' ? 'bg-green-400' : ''
          }`}
        ></p>
        <img className='h-5 mx-4' src={assets.stripe_logo} alt='' />
      </div>

      {/* Razorpay */}
      <div
        className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'
        onClick={() => setMethod('razorpay')}
      >
        <p
          className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
            method === 'razorpay' ? 'bg-green-400' : ''
          }`}
        ></p>
        <img className='h-5 mx-4' src={assets.razorpay_logo} alt='' />
      </div>

      {/* Cash on Delivery */}
      <div
        className='flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer'
        onClick={() => setMethod('cod')}
      >
        <p
          className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
            method === 'cod' ? 'bg-green-400' : ''
          }`}
        ></p>
        <p className='uppercase text-gray-500 text-sm font-medium mx-4'>
          cash on delivery
        </p>
      </div>
    </div>
  </div>
  <div className='w-full text-end mt-8'>
        <button onClick={()=>navigate("/orders")} className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>Place Order</button>
  </div>
</div>

    </div>
  )
}

export default PlaceOrder