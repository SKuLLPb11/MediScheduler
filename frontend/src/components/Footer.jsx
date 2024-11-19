import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col flmt-40 text-smex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 '>
        {/* LeftSide  */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>
        {/* CenterSide */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        {/* RightSide */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-9779809187</li>
                <li>Sushant Gupta</li>
                <li>sushantguptapb11@gmail.com</li>
            </ul>

        </div>
        </div>
        {/* CopyRight Text */}
        <div>
            <hr />
            <p className='py-5 text-sm textce'>Copyright 2024 @Sushant Gupta - All rights Reserved</p>

        </div>
    </div>
  )
}

export default Footer