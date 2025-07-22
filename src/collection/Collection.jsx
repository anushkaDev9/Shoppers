import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../comp/Title'
import ProductItem from '../comp/ProductItem'
const Collection = () => {
 const {products,search,showsearch}=useContext(ShopContext)
 const [showFilter,setShowFilter]=useState(false)
 const [filterProducts,setFilterProducts]=useState([]);
 const [category,setCategory]=useState([])
 const [subcat,setSubcat]=useState([])
 const [sortType,setSortType]=useState('relevent')
 const toggleCat=(e)=>{
  if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=>item !==e.target.value))
  }else{
    setCategory(prev=> [...prev,e.target.value])
  }
 }
 const toggleSubCat=(e)=>{
    if(subcat.includes(e.target.value)){
      setSubcat(prev=> prev.filter(item=>item !==e.target.value))
    }else{
      setSubcat(prev=> [...prev,e.target.value])
    }
 }
 useEffect(()=>{
   setFilterProducts(products);
 },[])
 useEffect(()=>{
  console.log(category)
 },[category])
 useEffect(()=>{
  console.log(subcat)
 },[subcat])
 const applyFilter=()=>{
       let productCopy=products.slice()
       if(category.length>0){
             productCopy=productCopy.filter(item=>category.includes(item.category))
       }
        if(subcat.length>0){
             productCopy=productCopy.filter(item=>subcat.includes(item.subCategory))
       }

       setFilterProducts(productCopy)
 }
 const sortproduct=()=>{

   let fpCopy=filterProducts.slice();
   switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price- b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      default:
        applyFilter();
        break;
   }
 }
  useEffect(()=>{
 applyFilter()
 console.log(filterProducts)
 },[category,subcat])
 useEffect(()=>{
   sortproduct();
 },[sortType])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300'>
            <div className='min-w-60'>
                   <p className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase '>Filters</p>  
                 <div className={`border border-gray-300 pl-5 py-3 mt-6  block`}>
                    <p className='mb-3 text-sm font-medium'>Categories</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                      <p className='flex gap-2'>
                        <input className='w-3 ' type='checkbox' value={'Men'} onChange={toggleCat} />Men
                      </p>
                       <p className='flex gap-2'>
                        <input className='w-3 ' type='checkbox' value={'Women'} onChange={toggleCat}/>Women
                      </p>
                       <p className='flex gap-2'>
                        <input className='w-3 ' type='checkbox' value={'Kids'} onChange={toggleCat}/>Kids
                      </p>

                    </div>
                 </div>
                  <div className={`border border-gray-300 pl-5 py-3 mt-6 block`}>
                    <p className='mb-3 text-sm font-medium'>type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                      <p className='flex gap-2'>
                        <input className='w-3 ' type='checkbox' value={'Topwear'} onChange={toggleSubCat}/>Topwear
                      </p>
                       <p className='flex gap-2'>
                        <input className='w-3 ' type='checkbox' value={'Bottomwear'} onChange={toggleSubCat}/>Bottomwear
                      </p>
                       <p className='flex gap-2'>
                        <input className='w-3 ' type='checkbox' value={'Winterwear'} onChange={toggleSubCat}/>Winterwear
                      </p>

                    </div>
                 </div>
            </div>    
            {/*Right side*/}    
            <div className='flex-1'>
              <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1='All' text2="Collection"/>
                {/**/}
                <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                  <option value="relavent">Sort By:Relevent</option>
                  <option value="low-high">Sort By:Low to High</option>
                  <option value="high-low">Sort By:High to low</option>
                </select>
              </div>
              {/*map */}
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                      filterProducts.map((item,index)=>(
                          <ProductItem 
                          key={index.key}
                           id={item._id} 
                           price={item.price} 
                           image={item.image}
                           name={item.name}
                           />
                      ))
                    }
              </div> 
            </div>
    </div>
  )
}

export default Collection