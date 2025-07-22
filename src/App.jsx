import { useState } from 'react'

import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Collection from './collection/Collection'
import Contact from './contact/Contact'
import Product from './Product/Product'
import About from './about/About'
import Cart from './cart/Cart'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Footer from './comp/Footer'
import SearchBar from './comp/SearchBar'
import { ToastContainer } from 'react-toastify'
import PlaceOrder from './placeorder/PlaceOrder'
import Order from './orders/Order'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
           <Route path='/' element={<Home/>} />
            <Route path='/collection' element={<Collection/>} />
             <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/product/:productId' element={<Product/>}/>
               <Route path='/cart' element={<Cart/>}/>
               <Route path="/login" element={<Login/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                <Route path="/place-order" element={<PlaceOrder/>}/>
                  <Route path="/orders" element={<Order/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
