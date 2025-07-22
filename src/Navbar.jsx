import React, { useContext, useState } from 'react'
import { assets } from './assets/frontend_assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ShopContext } from './context/ShopContext'

const Navbar = () => {
  const [visible ,setVisible]=useState(false)
  const {getCartCount}=useContext(ShopContext)
  console.log(getCartCount())
  console.log(visible)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
             <Link to='/'><p className='text-2xl sm:text-3xl'>Shoppers</p></Link>
             <ul className='hidden sm:flex gap-5 text-md text-gray-700 uppercase'>
                    <NavLink className='flex flex-col items-center gap-1' to="/">
                      <p>Home</p>
                      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '></hr>
                    </NavLink>
                    <NavLink className='flex flex-col items-center gap-1' to="/collection">
                      <p>Collection</p>
                      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                    </NavLink>
                   <NavLink className='flex flex-col items-center gap-1' to="/about">
                      <p>About</p>
                      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                    </NavLink>
                    <NavLink className='flex flex-col items-center gap-1' to="/contact">
                      <p>Contact</p>
                      <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                    </NavLink>
             </ul>
             <div className='flex items-center gap-6 '>
              
                <div className='group relative'>
                     <Link to="/login">
                     <img src={assets.profile_icon} className='w-5 cursor-pointer' alt=""/></Link> 
                      
                </div>
                <Link to='/cart' className='relative'>
                     <img src={assets.cart_icon} alt="" className='w-5 cursor-pointer' />
                     <p className='absolute right-[5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
                </Link>
              <img 
  onClick={() => setVisible(true)} 
  src={assets.menu_icon} 
  alt="Menu icon" 
  className="w-5 sm:hidden cursor-pointer block"
/>
             </div>
           <div className={`absolute right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible===true ? "w-full" : "w-0"}`}>
  <div className='h-4 flex flex-col text-gray-600'>
    <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={()=>setVisible(false)}>
      <img className='w-4 h-4 rotate-180' src={assets.dropdown_icon} alt="backicon"/>
      <p>Back</p>
    </div>
    <NavLink className='py-2 pl-6 border border-gray-300 uppercase' to="/" onClick={()=>setVisible(false)}>
                     Home
                    </NavLink>
                    <NavLink className='py-2 pl-6 border border-gray-300 uppercase' to="/collection" onClick={()=>setVisible(false)}>
                      Collection
                     
                    </NavLink>
                   <NavLink className='py-2 pl-6 border border-gray-300 uppercase' to="/about" onClick={()=>setVisible(false)}>
                     About
                    
                    </NavLink>
                    <NavLink className='py-2 pl-6 border border-gray-300 uppercase' to="/contact" onClick={()=>setVisible(false)}>
                     Contact
                     
                    </NavLink>
  </div>
</div>

    </div>
  )
}

export default Navbar