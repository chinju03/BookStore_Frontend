import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'

function AdminBooks() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>All Books</h1>
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => { setBookListStatus(true), setUserListStatus(false) }} className={bookListStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Book List</p>
            <p onClick={() => { setBookListStatus(false), setUserListStatus(true) }} className={userListStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
          </div>

          {bookListStatus &&
            <div className='md:grid grid-cols-4 w-full my-4'>
              <div className='shadow rounded p-3 m-4'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" width={'100%'} height={'300px'} />
                <div className='flex justify-center flex-col items-center mt-4'>
                  <p>Ikigai</p>
                  <p>Francesc and Hector </p>
                  <p>Discount Price</p>
                  <button className='w-full mt-3 p-3 rounded border bg-green-700 text-white hover:border-green-600 hover:bg-white hover:text-green-600'>Approve</button>
                </div>
              </div>
            </div>}

          {userListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              <div className='shadow rounded p-2 m-2 bg-gray-200'>
                <p className='text-red-700 font-bold'>ID: 45983747</p>
                <div className='flex items-center mt-3'>
                  <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" width={'70px'} height={'70px'} style={{borderRadius:'50%'}} />
                  <div className='w-full flex flex-col ml-3'>
                    <p className='text-blue-800 text-lg font-bold'>Username:</p>
                    <p>Email:</p>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </>
  )
}

export default AdminBooks