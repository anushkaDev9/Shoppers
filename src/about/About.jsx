import React from 'react'
import Title from '../comp/Title'
import { assets } from '../assets/frontend_assets/assets'
const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t border-gray-300'>
  <Title text1={'About'} text2={'Us'} />
  <div className='my-10 flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start'>
    <img 
      src={assets.about_img} 
      className='w-full md:max-w-[400px] lg:max-w-[450px] object-cover rounded-lg' 
      alt="About Shoppers"
    />
    <div className='flex flex-col md:text-lg text-sm justify-center text-left gap-6 md:w-[60%] text-gray-600'>
      <p>
        Shoppers was born out of a passion for innovation and a desire to revolutionize the way people shop online.
        Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, 
        and purchase a wide range of products from the comfort of their homes.
      </p>
      <p>
        Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater 
        to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive 
        collection sourced from trusted brands and suppliers.
      </p>
      <b className='text-gray-800'>Our mission</b>
      <p>
        Our mission at Shoppers is to empower customers with choice, convenience, and confidence. We're dedicated to providing 
        a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
      </p>
    </div>
  </div>
</div>

  )
}

export default About