import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        <div className='w-full sm:w:1/2 flex items-center justify-center py-10 sm:py-0'>
             <div className='text-[#414141]'>
                 <div className='flex items-center gap-2 capitalize'>
                          <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                          <p className='font-medium text-sm md:text-base'>our bestsellers</p>
                 </div>
                 <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest arrivals</h1>
                 <div className='flex items-center gap-2 capitalize '>
                         <p className='font-semibold text-sm md:text-base'>shop now</p>
                         <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                 </div>
             </div>
        </div>
        <img src={assets.hero_img} alt="" className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Header