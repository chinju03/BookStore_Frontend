import React from 'react'
import { FaLinkedin, FaPowerOff, FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AdminHeader() {
    return (
        <>
            <nav className='px-5 py-3 flex items-center'>
                {/* logo */}
                <div className='flex items-center'>
                    <img src="https://t3.ftcdn.net/jpg/07/77/57/52/360_F_777575247_2g90eppQjb9MUKY7paVMASZ39GLr2YN3.jpg" alt="" height={"60px"} width={"50px"} />
                    <h1 className='font-bold flex text-2xl ms-4 '>BOOKSTORE</h1>
                </div>
                {/* login */}
                <div className='ms-auto'>
                    <button className='flex justify-between items-center border border-black rounded px-4 py-3 ms-3 hover:bg-black hover:text-white'><FaPowerOff className='me-3' />Logout</button>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader