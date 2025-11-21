import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { MdOutlineVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [historyStatus, setHistoryStatus] = useState(false)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div className='bg-white p-3' style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>Username</h1>
          <MdOutlineVerified className='text-blue-500 ms-3 text-xl' />
        </div>
        <div>
          <button className='flex text-blue-600 px-4 py-3 font-bold border border-blue-200'> <FaRegEdit className='mt-1 me-2' />Edit</button>
        </div>
      </div>
      <p className='md:px-20 px-5 ny-5 text-justify'>Book Lover</p>

      <div className='flex justify-center items-center my-8 font-medium text-lg'>
        <p onClick={() => { setSellBookStatus(true), setBookStatus(false), setHistoryStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Book</p>
        <p onClick={() => { setSellBookStatus(false), setBookStatus(true), setHistoryStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
        <p onClick={() => { setSellBookStatus(false), setBookStatus(false), setHistoryStatus(true) }} className={historyStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
      </div>

      {sellBookStatus &&
        <div className=' bg-gray-400'>
          <div className='flex justify-center items-center p-4'>
            <h1 className='font-bold text-2xl'>Book Details</h1>
          </div>

          <div className='md:grid grid-cols-2 gap-8'>
            <div className='md:my-10 mt-5 px-2 '>
              <div className='mb-3'>
                <input type="text" placeholder='Title' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2 rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <textarea placeholder='Publisher' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
            </div>
            <div className='md:my-10 mt-5 px-2 '>
              <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Language' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='ISBN' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" placeholder='Category' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='flex justify-center items-center mt-10 flex-col'>
                <label htmlFor="uploadbookimg">
                  <input type="file" style={{ display: "none" }} alt='noimage' />
                  <img src="https://static.vecteezy.com/system/resources/previews/035/868/900/non_2x/illustration-of-upload-vector.jpg" alt="" style={{ width: '200px', height: '200px' }} />
                </label>
              </div>

              <div className=' flex md:justify-end justify-center mt-5'>
                <button className='bg-amber-600 text-white rounded p-4 me-3 hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                <button className='bg-green-600 text-white rounded p-4  hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      }

      {bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          <div className='bg-gray-400 p-5 rounded mt-4'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Book Title</h1>
                <h2>Author Nmae</h2>
                <h3 className='text-blue-800'>₹ 699</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laboriosam! Consectetur dolore est reprehenderit illum nihil error numquam! Explicabo, officia laborum debitis quia dolore quod in perspiciatis soluta officiis eos!</p>
                <div className='flex mt-2'>
                  <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" style={{ width: '70px', height: '70px' }} />
                  <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="" style={{ width: '70px', height: '70px' }} />
                  <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" style={{ width: '70px', height: '70px' }} />
                </div>
              </div>
              <div className='px-4 mt-4 md:mt-4'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" className='w-full' style={{ height: '240px' }} />
                <div className='flex justify-end mt-4'>
                  <button type='button' className='p-2 rounded bg-red-800 text-white hover:border hover:border-red-800 hover:text-red-800 hover:bg-white'>Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
            <p className='text-red-700'>No Books Added Yet....</p>
          </div>

        </div>
      }

      {historyStatus &&
        <div className='p-10 my-20 shadow rounded'>
          <div className='bg-gray-400 p-5 rounded mt-4'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Book Title</h1>
                <h2>Author Nmae</h2>
                <h3 className='text-blue-800'>₹ 699</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laboriosam! Consectetur dolore est reprehenderit illum nihil error numquam! Explicabo, officia laborum debitis quia dolore quod in perspiciatis soluta officiis eos!</p>
                
              </div>
              <div className='px-4 mt-4 md:mt-4'>
                <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" className='w-full' style={{ height: '240px' }} />
                
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
            <p className='text-red-700'>No Books Added Yet....</p>
          </div>

        </div>
      }




      <Footer />
    </>
  )
}

export default Profile