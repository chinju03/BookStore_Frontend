import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaArrowUpRightFromSquare, FaLocationDot } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

function Careers() {
  const [applyStatus, setApplyStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className='text-center my-5'>
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae est at reprehenderit repellat, sint excepturi expedita accusantium quasi, tempore earum adipisci eaque accusamus. Aliquam blanditiis vel corrupti itaque possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis, ex deleniti sequi harum incidunt, eveniet, commodi ipsam nemo quaerat animi doloribus odio eum distinctio praesentium. Illum quae vel perspiciatis!
          </p>
        </div>
        <div className='my-10'>
          <h1 className='text-2xl font-bold'>Current Openings</h1>
          <div className='flex my-10 justify-center items-center'>
            <input type="text" className='p-2 border border-gray-200 text-black  placeholder-gray-500' placeholder="search by title" />
            <button className='bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 p-2 '>Search</button>
          </div>
        </div>
        {/* job listing */}
        <div className='border border-gray-200 p-5 shadow my-5'>
          <div className='flex mb-5'>
            <div className='w-full '>
              <h1>Frontend Developer</h1>
              <hr />
            </div>
            <button onClick={() => setApplyStatus(true)} className='bg-blue-900 text-white p-2 ms-5 flex items-center'>Apply<FaArrowUpRightFromSquare className='ms-2' /></button>
          </div>
          <p className='flex '><FaLocationDot className='me-2 mt-1' />Kochi</p>
          <p className='text-lg my-2'>Job Type: Full Time</p>
          <p className='text-lg my-2'>Salary : 20000 - 30000/month</p>
          <p className='text-lg my-2'>Qualification: B.Tech</p>
          <p className='text-lg my-2'>Expirence: Fresher</p>
          <p className='text-lg my-2 text-justify'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut culpa repudiandae magni voluptatem. Sequi!</p>
        </div>
        <div className='border border-gray-200 p-5 shadow my-5'>
          <div className='flex mb-5'>
            <div className='w-full '>
              <h1>Frontend Developer</h1>
              <hr />
            </div>
            <button className='bg-blue-900 text-white p-2 ms-5 flex items-center'>Apply<FaArrowUpRightFromSquare className='ms-2' /></button>
          </div>
          <p className='flex '><FaLocationDot className='me-2 mt-1' />Kochi</p>
          <p className='text-lg my-2'>Job Type: Full Time</p>
          <p className='text-lg my-2'>Salary : 20000 - 30000/month</p>
          <p className='text-lg my-2'>Qualification: B.Tech</p>
          <p className='text-lg my-2'>Expirence: Fresher</p>
          <p className='text-lg my-2 text-justify'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut culpa repudiandae magni voluptatem. Sequi!</p>
        </div>
      </div>

      {applyStatus &&
        <div className='relative z-10 overflow-y-hidden '>
          <div className='bg-gray-500/25 fixed inset-0'>
            <div className='flex justify-center items-center scroll-auto min-h-screen '>
              <div className='bg-white rounded-2xl md:w-150 w-100'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Application Form</h3>
                  <button onClick={() => setApplyStatus(false)}><IoMdClose /></button>
                </div>
                <div className='md:grid grid-cols-2 gap-3'>
                  <div className='mt-7 ms-7'>
                    <div className='mb-3'>
                      <input type="text" placeholder='Full Name' className='w-full border p-3 rounded placeholder-gray-400 bg-white text-black' />
                    </div>
                    <div className='mb-3'>
                      <input type="text" placeholder='Email Id' className='w-full border p-3 rounded placeholder-gray-400 bg-white text-black' />
                    </div>
                  </div>
                  <div className='mt-7 me-7'>
                    <div className='mb-3'>
                      <input type="text" placeholder='Qualification' className='w-full border p-3 rounded placeholder-gray-400 bg-white text-black' />
                    </div>
                    <div className='mb-3'>
                      <input type="text" placeholder='Phone' className='w-full border p-3 rounded placeholder-gray-400 bg-white text-black' />
                    </div>
                  </div>
                  <div className='ms-7 me-7  col-span-2'>
                    <div>
                      <textarea name="" id="" placeholder='Cover Letter' className='w-full border p-3 rounded placeholder-gray-400 bg-white text-black'></textarea>
                    </div>
                    <div className=''>
                      <label htmlFor="">Upload Resume</label>
                      <input type="file" name="" id="" className='block w-full border-gray-900 text-gray-400 border rounded cursor-pointer file:bg-gray-700 file:p-2' />
                    </div>
                  </div>
                </div>
                <div className='mt-4 bg-gray-400'>
                  <div className='flex md:justify-end justify-center p-3'>
                  <button className='bg-amber-600 text-white rounded p-2 me-3 hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                  <button className='bg-green-600 text-white rounded p-2  hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      <Footer />
    </>
  )
}

export default Careers