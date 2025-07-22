import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
           <div>
               <img src={assets.logo} className='mb-5 w-32' alt=""/>
               <p className='w-full md:w-2/3 text-gray-700 '>
                lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </p>
           </div>
           <div>
                <p className='text-xl font-medium mb-5 uppercase'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600 capitalize'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>privavy policy</li>
                </ul>
           </div>
           <div>
                 <p className='uppercase text-xl font-medium mb-5'>Get in touch </p>
                 <ul className='flex flex-col gap-1 text-gray-600 capitalize'>
                 <li>+1-222-444-7777</li>
                 <li>contact@shoppers.com</li>
                 </ul>
           </div>
           
    </div>
        <div>
              <hr className='text-gray-300'/>
              <p className='py-5 text-sm text-center'>Copyright 2024@shoppers All rigits revsered</p>
           </div>
    </div>
    
  )
}

export default Footer