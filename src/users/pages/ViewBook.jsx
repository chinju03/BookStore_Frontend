import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaBackward, FaCross, FaRegEye } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header/>
      <div className='md:p-20 p-5'>
        <div className='shadow w-full md:p-10 p-5'>
          <div className='flex justify-end'>
            <FaRegEye onClick={()=>setModalStatus(true)}/>
          </div>
          <div className='md:grid grid-cols-[1fr_3fr] w-full'>
            <div>
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" className='w-full h-100' />
            </div>
            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>Ikigai</h1>
              <p className='text-center text-blue-500'>Francesc Miralles and Hector Garcia</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher :</p>
                <p>Language :</p>
                <p>No:of Pages :</p>
              </div>
              <div className='md:flex justify-between mt-10'>
                <p>Seller Mail :</p>
                <p>Real Price :</p>
                <p>ISBN :</p>
              </div>
              <p className='text-justify mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid iste commodi deserunt iure culpa veritatis quos voluptate quia dignissimos! Deleniti consectetur esse placeat fuga modi molestiae voluptas autem recusandae!</p>
              <div className='mt-10 flex justify-end'>
                <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800 me-2'><FaBackward className='mt-1 me-1'/>Back</button>
                <button className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      { modalStatus && 
      <div  className='relative z-10 overflow-y-hidden'>
        <div className='bg-gray-500/25 fixed inset-0'>
        <div className='flex justify-center items-center scroll-auto min-h-screen'>
          <div className='bg-white rounded-2xl md:w-250 w-100'>
            <div className='bg-black text-white flex justify-between items-center p-3'>
              <h3>Book Images</h3>
              <button onClick={()=>setModalStatus(false)}><IoMdClose/></button>
            </div>
            <div className='relative p-5'>
              <p className='text-blue-600'>camera click of the book in the hand of the seller</p>
            </div>
            <div className='md:flex flex-wrap my-4 overflow-y-hidden'>
              <img height={'250px'} width={'250px'} src="https://5.imimg.com/data5/SELLER/Default/2023/4/300693935/CF/LD/VU/150763822/ikigai-jpg-500x500.jpg" alt="" className='mx-2 md:mb-0 mb-2' />
              <p className='font-bold text-red-700 ms-5'>User uploaded book images are unavailable....</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      }
      <Footer/>
    </>
  )
}

export default ViewBook