import React from 'react'
import { FaArrowAltCircleRight, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-20 bg-gray-900 text-white p-10'>
        <div>
            <h3 className='font-bold'>About Us</h3>
            <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum aliquam dolor, voluptate consequuntur ipsa amet? Voluptas corrupti quasi, nobis facilis magni sunt doloribus aperiam cupiditate quis illo sapiente eligendi!</p>
        </div>
        <div>
            <h3>Newsletter</h3>
            <p className='mt-1'>Stay updated with our latest trend</p>
            <div className='flex mt-2'>
                <input type="text" placeholder='emailId' className='p-2 bg-white placeholder-gray-500' />
                <button className='bg-yellow-400 p-3'><FaArrowAltCircleRight /></button>
            </div>
        </div>
        <div>
            <h3>Follow us</h3>
            <p className='mt-1'>Let us be social</p>
            <div className='flex mt-4'>
                <FaLinkedin className='me-3 text-2xl' />
                <FaSquareXTwitter className='me-3 text-2xl' />
                <FaFacebookSquare className='me-3 text-2xl' />
                <FaInstagramSquare className='me-3 text-2xl' />
            </div>
        </div>
    </div>
    <div className='bg-black p-3 text-center text-white'>
        <p> Copyright © 2025 All right reserved| This website is made with &#10084; by Chinju</p>
    </div>
    </>
  )
}

export default Footer