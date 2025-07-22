import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
const Product = () => {
  const {productId}=useParams();
  console.log(productId)
  const {products,currency,addToCart}=useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]=useState('')
  const [size,setSize]=useState('')
  const fetchProductData=async()=>{
    console.log(productData.sizes)
           products.map((item)=>{
                if(item._id===productId){
                  setProductData(item)
                 setImage(item.image[0])
                 console.log(item.sizes)
                  return null;
                }
           })
  }
  useEffect(()=>{
         fetchProductData()
  },[productId,products])
  return productData ?(
    <div className='border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
               <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
               <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
                    <div className='w-full sm:w-[80%]'>
                      <img className='w-full h-auto' alt='' src={image}/>
                    </div>
               </div>
               <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2 '>
                        <img src={assets.star_icon} alt="" className='w-3 5 ' />
                        <img src={assets.star_icon}alt="" className='w-3 5' />
                        <img src={assets.star_icon} alt="" className='w-3 ' />
                        <img src={assets.star_icon} alt="" className='w-3'/>
                        <img src={assets.star_dull_icon}alt="" className='w-3 ' />
                        <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap2-'>
                  {productData.sizes.map((item,index)=>(
                            <button onClick={()=>setSize(item)} className={`border  border-gray-300 py-2 mx-2 px-4 cursor-pointer bg-gray-100 ${item===size?"border-orange-500":""} `} key={index}>{item}</button>
                  ))}
                </div>
              </div>
              <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-500 uppercase cursor-pointer'>Add to cart</button>
               <hr className='mt-8 sm:w-4/5'/>
               <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                      <p> 100% original product</p>
                      <p>cash on delivery is available on this product  </p>
                      <p>easy return and exchange policy withing 7 days</p>
               </div>
               </div>
               </div>
              
    </div>
  ):<div className='opacity-0'></div>
}

export default Product