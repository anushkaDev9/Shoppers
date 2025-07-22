import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const [visiblee,setVisible]=useState(false)
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname.includes("collection")){
              setVisible(true)
        }else{
            setVisible(false)
        }
         
    },[location])
  return visiblee ?  (
    <div className='border-t border-b border-b-gray-50 border-t-gray-50 bg-gray-50 text-center'>
         <div className='inline-flex items-center justify-center border-2  border-gray-400 px-5 py-2 my-2 mx-3 rounded-full w-2/3 sm:w-1/2 '>
              <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm ' type='text' placeholder='Search' />
           <img src={assets.search_icon} alt='' className='w-4'/>
         </div>
    </div>
  ):null 
}

export default SearchBar