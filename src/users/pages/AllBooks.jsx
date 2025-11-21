import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { Link } from 'react-router-dom'

function AllBooks() {
  return (
    
    <>
      <Header/>
      <div className='flex justify-center items-center flex-col my-5'>
        <h1 className='text-3xl font-bold my-5'>Collections</h1>
        <div className='flex my-5'>
          <input type="text" className='p-2 border border-gray-200 text-black w-full placeholder-gray-500' placeholder="search by title" />
          <button className='bg-blue-900 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-800 p-2 '>Search</button>
        </div>
      </div>

      <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
        <div className='col-span-1'>
            <h1>Filters</h1>
            <div className='mt-5'>
              <input type="radio" id='Fiction' />
              <label htmlFor="Fiction" className='ms-2'>Fiction</label>
            </div>
            <div className='mt-5'>
              <input type="radio" id='Fictions' />
              <label htmlFor="Fictions" className='ms-2'>Fiction</label>
            </div>
            <div className='mt-5'>
              <input type="radio" />
              <label htmlFor="" className='ms-2'>Fiction</label>
            </div>
          
        </div>
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
            <div className='shadow rounded p-3 mx-4 my-3 '>
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" width={"100%"} height={"100px"}/>
              <div className='flex flex-col justify-center items-center'>
                <p>Book Title</p>
                <p>Author</p>
                <Link to={'/view-books/1'} className='bg-blue-800 p-2 text-white w-full text-center hover:bg-white hover:text-blue-900 hover:border hover:border-blue-600'>View Book</Link>
              </div>
            </div>
            <div className='shadow rounded p-3 mx-4 my-3 '>
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" width={"100%"} height={"100px"}/>
              <div className='flex flex-col justify-center items-center'>
                <p>Book Title</p>
                <p>Author</p>
                <Link to={'/view-books/1'} className='bg-blue-800 p-2 text-white w-full text-center hover:bg-white hover:text-blue-900 hover:border hover:border-blue-600'>View Book</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    <div className='my-10 flex justify-center items-center flex-col'>
      <img src="https://cdn-icons-gif.flaticon.com/17905/17905764.gif" alt=""  width={"400px"}/>
      <p className='font-semibold text-xl mt-5'>please <Link to={'/login'} className='text-blue-700 font-bold'>Login</Link> to explore more... </p>
    </div>
      <Footer/>
    </>
  )
}

export default AllBooks