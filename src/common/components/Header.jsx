import React, { useState } from 'react'
import { FaFacebookSquare, FaLinkedin, FaRegUser } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { LuMenu } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Header() {
    const [listStatus, setListStatus] = useState(false)
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                {/* logo */}
                <div className='flex items-center'>
                    <img src="https://t3.ftcdn.net/jpg/07/77/57/52/360_F_777575247_2g90eppQjb9MUKY7paVMASZ39GLr2YN3.jpg" alt="" height={"60px"} width={"50px"} />
                    <h1 className='font-bold text-1xl ms-2 md:hidden'>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-3xl font-bold'>BOOK STORE</h1>
                </div>
                {/* login */}
                <div className='md:flex justify-center items-center hidden'>
                    <FaLinkedin className='me-3 text-2xl' />
                    <FaSquareXTwitter className='me-3 text-2xl' />
                    <FaFacebookSquare className='me-3 text-2xl' />
                    <Link to={"/login"}> <button className='flex justify-between items-center border border-black rounded px-1 py-2 ms-3 hover:bg-black hover:text-white'><FaRegUser className='me-2' />Login</button></Link>
                </div>
            </div>
            <nav className='w-full  bg-gray-900 text-white p-5 '>
                <div className='flex justify-between items-center md:hidden'>
                    <button onClick={()=>setListStatus(!listStatus)}><LuMenu className='text-2xl' /></button>
                    <Link to={"/login"}> <button className='flex justify-between items-center border border-black rounded px-1 py-2 ms-3 hover:bg-black hover:text-white'><FaRegUser className='me-2' />Login</button></Link>
                </div>
                <ul className={listStatus? 'flex flex-col' : 'md:flex justify-center items-center hidden text'}>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >Home</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'} >Books</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'} >Careers</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'} >Contact</Link></li>
                </ul>

            </nav>
        </>
    )
}

export default Header