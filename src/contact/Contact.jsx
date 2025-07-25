import React from 'react'
import Title from '../comp/Title'
import { assets } from '../assets/frontend_assets/assets'
const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t border-gray-300'>
          <Title text1={'Contact'} text2={'us'}/>
          <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
           <img src={assets.contact_img} alt='' className='w-full md:max-w-[480px] '/>
           <div className='flex flex-col justify-center items-start gap-6  '>
             
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500 text-lg text-left'>
  54709 Willms Station<br/>Suite 350, Washington, USA
</p>
 <p className='text-gray-500 text-lg text-left'>
  Tel: (415) 555-0132<br/>Email: admin@shoppers.com
</p>
    <p className='font-semibold text-xl text-gray-600'>Careers at Shoppers</p>    
    <p className='text-gray-500 text-lg text-left'>
  Learn more about our teams and job openings.
</p>    
<button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-500'>Explore Jobs</button>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Contact