import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../comp/Title';
import ProductItem from '../comp/ProductItem';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from './CartTotal';
const Cart = () => {
  const { products, currency, cartItems,updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          temp.push({
            _id: productId,
            size: size,
            quantity: quantity
          });
        }
      }
    }
    setCartData(temp);
   
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
           <div className='text-2xl mb-3 '> 
                   <Title text1={'Your'} text2={'orders'}/>
           </div>
           <div className=''>
              {
                cartData.map((item,index)=>{
                    const productData=products.find((product)=>product._id===item._id)
                    return (
                      <div key={index} className='py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                         <div className='flex items-start gap-6'>
                                 <img src={productData.image[0]} alt=""className='w-16 sm:w-20'/>
                                 <div>
                                   <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                  <div className='flex items-center gap-5 mt-2'>
                                    <p>{currency} {productData.price}</p>
                                    <p className='px-2 sm:px-3 sm:py-1 border border-slate-400 bg-slate-50'>{item.size}</p>
                                    </div>
                                  </div>
                          </div>
                           <input onChange={(e)=>e.target.value===""|| e.target.value==='0'? null:updateQuantity(item._id,size,Number(e.target.value))} className='border border-gray-400 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity}/>
                           <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt=""/>
                        </div>
                     
                    )
                })
              }
           </div>
           <div className='flex justify-end my-20'>
             <div className='w-full sm:w-[450px]'>
                 <CartTotal/>
                 <div className='w-full text-end'>
                    <button onClick={()=>navigate('/place-order')} className='uppercase bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer '>Proceed to checkout</button>
                 </div>
             </div>
           </div>
    </div> 
  );
};

export default Cart;
