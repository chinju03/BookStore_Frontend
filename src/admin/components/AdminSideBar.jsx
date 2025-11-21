import React from 'react'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { PiBook } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <>
    <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col '>
        <div className='my-10'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPx5Ngn3BqU_b1o4MO5-90QnJXVEdVLYmaA&s" alt="" style={{width:'170px', height:'170 px', borderRadius:'50%'}} />
        </div>
        <h1 className='text-2xl mb-10'>Chinju</h1>
        <div className='mb-10'>
            <div className=' mb-4 flex'>
                {/* <input type="radio" id='home' readOnly /> */}
                <Link to={'/admin-home'}><label htmlFor="home" className='flex ms-3'><FaHome className='mt-1 me-1'/>Home</label></Link>
            </div>
            <div className=' mb-4 flex'>
                {/* <input type="radio" id='books' readOnly /> */}
                 <Link to={'/admin-books'}><label htmlFor="books" className='flex ms-3'><PiBook className='mt-1 me-1'/>Books</label></Link>
            </div>
            <div className=' mb-4 flex'>
                {/* <input type="radio" id='careers' readOnly /> */}
                 <Link to={'/admin-careers'}><label htmlFor="careers" className='flex ms-3'><FaGraduationCap className='mt-1 me-1'/>Careers</label></Link>
            </div>
            <div className=' mb-4 flex'>
                {/* <input type="radio" id='settings' readOnly /> */}
                 <Link to={'/admin-settings'}><label htmlFor="settings" className='flex ms-3'><IoMdSettings className='mt-1 me-1'/>Settings</label></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminSideBar