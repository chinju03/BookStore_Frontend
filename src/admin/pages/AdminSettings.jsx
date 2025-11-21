import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/components/Footer'
import AdminSideBar from '../components/AdminSideBar'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSideBar />
        </div>
        <div className='p-4'>
          <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1>
          <div className='md:grid grid-cols-2 mt-10'>
            <div className='md:px-10 px-5'>
              <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis at laboriosam corrupti excepturi consequatur temporibus dolores esse in necessitatibus, eveniet animi ex ipsa ea quisquam hic qui aliquam? Autem, dolores, qui enim molestiae iusto dolorum suscipit similique ipsam soluta beatae quam omnis blanditiis dicta.</p>
              <p className='text-justify mt-10'> Nemo deserunt aut voluptate reprehenderit nobis consequatur rerum, quibusdam facilis sit! Commodi doloremque voluptatem iure vero eos! Incidunt maxime labore hic nostrum deserunt architecto odit rerum voluptas, ex voluptatum iusto et possimus quidem esse repudiandae id corporis error praesentium similique qui obcaecati aliquam est sint? Aut dolorem at ratione eveniet voluptate nemo perferendis provident voluptas.</p>
            </div>
            <div className='md:px-10 px-5'>
              <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0'>
                <div className='flex justify-center items-center my-10'>
                  <label htmlFor="edituserprofile">
                    <input type="file" id='edituserprofile' style={{display:"none"}}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPx5Ngn3BqU_b1o4MO5-90QnJXVEdVLYmaA&s" alt="" style={{width:'170px', height:'170 px', borderRadius:'50%'}} />
                  </label>
                </div>
                <div className='mb-3'>
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='username' className='bg-white w-full rounded p-2' />
                </div>
                <div className='mb-3'>
                  <label htmlFor="">Password</label>
                  <input type="text" placeholder='password' className='bg-white w-full rounded p-2' />
                </div>
                <div className='mb-3'>
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" placeholder='confirm password' className='bg-white w-full rounded p-2' />
                </div>
                <div className='flex justify-between mt-10'>
                  <button className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                  <button className='bg-green-600 text-white rounded p-4 w-1/2 hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings