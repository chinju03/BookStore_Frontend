import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { FaArrowUpRightFromSquare, FaDeleteLeft, FaLocationDot } from 'react-icons/fa6'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AdminCareers() {
  const [jobStatus, setJobStatus] = useState(true)
  const [applicantStatus, setApplicantStatus] = useState(false)
  
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>Careers</h1>
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => { setJobStatus(true), setApplicantStatus(false) }} className={jobStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Job Post</p>
            <p onClick={() => { setJobStatus(false), setApplicantStatus(true) }} className={applicantStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>View Applicant</p>
          </div>

          {jobStatus &&
            <div className=''>
              <div className='md:flex justify-center items-center my-8 w-full md:px-20 px-5'>
                <div className='md:flex w-full ms-2 md:ms-0'>
                  <input type="text" placeholder='search by title...' className='border border-gray-200 placeholder-gray-200 p-2 md:w-1/4 w-1/4' />
                  <button className='bg-green-800 mt-5 md:mt-0  text-white p-2 md:ms-2 rounded hover:bg-white hover:text-green-600 hover:border hover:border-green-600' >Search</button>
                </div>
                <div>
                  <button className='bg-blue-800 mt-5 md:mt-0 w-full text-white p-2 rounded md:ms-3 hover:bg-white hover:border hover:border-blue-700 hover:text-blue-800'>Add Job</button>
                </div>
              </div>
              <div className='border border-gray-200 p-5 shadow my-5'>
                <div className='flex mb-5'>
                  <div className='w-full '>
                    <h1>Frontend Developer</h1>
                    <hr />
                  </div>
                  <button className='bg-red-900 text-white p-2 ms-5 flex items-center'>Delete<FaTrash className='ms-2' /></button>
                </div>
                <p className='flex '><FaLocationDot className='me-2 mt-1' />Kochi</p>
                <p className='text-lg my-2'>Job Type: Full Time</p>
                <p className='text-lg my-2'>Salary : 20000 - 30000/month</p>
                <p className='text-lg my-2'>Qualification: B.Tech</p>
                <p className='text-lg my-2'>Expirence: Fresher</p>
                <p className='text-lg my-2 text-justify'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut culpa repudiandae magni voluptatem. Sequi!</p>
              </div>
              <p className='text-red-800 font-bold text-lg'>No Jobs are Available....</p>
            </div>
          }

          {applicantStatus &&
            <div className='p-10'>
               <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Sl. No</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Email</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                    <th className='p-3 bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>Software Tester</td>
                    <td className='border border-gray-500 p-3 text-center'>Lijo</td>
                    <td className='border border-gray-500 p-3 text-center'>B.Tech</td>
                    <td className='border border-gray-500 p-3 text-center'>lijosam@gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>763974963</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto in officiis nam repellat vitae commodi cumque, quas ut distinctio fuga!</td>
                    <td className='border border-gray-500 p-3 text-center'><Link className='text-blue-500  underline'>Resume</Link></td>
                  </tr>
                </tbody>
               </table>
               <p className='text-red-800 font-bold text-lg'>No Applications are Available....</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default AdminCareers