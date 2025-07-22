import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextprovider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(true)
    const [cartItems,setCartItems]=useState({})
    const navigate=useNavigate();
    const addToCart=async(itemID,size)=>{
            let cartData=structuredClone(cartItems);
            if(!size){
                toast.error('Select Product Size')
                return;
            }
            if(cartData[itemID]){
                if(cartData[itemID][size]){
                    cartData[itemID][size]+=1;
                }else{
                    cartData[itemID][size]=1
                }
            }
            else{
                cartData[itemID]={};
                cartData[itemID][size]=1
            }
            setCartItems(cartData)
    }
 const getCartCount = () => {
  let totalCount = 0;
  for (const itemId in cartItems) {
    const sizes = cartItems[itemId];
    for (const size in sizes) {
      const quantity = sizes[size];
      totalCount += quantity;
    }
  }
  return totalCount;
};
const updateQuantity=async(itemId,size,quantity)=>{
          let cartData=structuredClone(cartItems);
          cartData[itemId][size]=quantity;
          setCartItems(cartData);
}
const getCartAmount= ()=>{
           let totalAmount=0;
           for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items)
               for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                       totalAmount+=itemInfo.price * cartItems[items][item]
                    }
                }catch(error){

                }
               }
           }
           return totalAmount;
}
useEffect(() => {
  console.log("Cart Items Updated: ", cartItems);
  console.log("Total Count: ", getCartCount());
}, [cartItems]);
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextprovider;
