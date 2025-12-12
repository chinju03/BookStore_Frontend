import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaBackward, FaCross, FaRegEye } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { getABookAPI, makePaymentAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
import {loadStripe} from '@stripe/stripe-js';

function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false)
  const [bookDetailes, setBookDetails] = useState({})
  const { id } = useParams()

  const handleViewBook = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getABookAPI(id, reqHeader)
      console.log(result);
      setBookDetails(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handlePurchace = async() =>{
    const stripe = await loadStripe('pk_test_51ScgVqCozcajbWPNhg85UZbbdXrKG84Rl1I12AVpj47J7g1uqeEC5d2MqTwdqNr5SvITMcQkmuFM2Q9X1qlOKRct007OLmvVgH');
    console.log(stripe); 
    const token = sessionStorage.getItem("token") 
    if (token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await makePaymentAPI (bookDetailes, reqHeader)
        console.log(result);
        const checkoutSessionUrl = result.data.checkoutsessionurl 
        if (checkoutSessionUrl){
          //redirect
          window.location.href = checkoutSessionUrl
        }
          
      } catch (error) {
        console.log(error);
        
      }
    }

  }

  useEffect(() => {
    handleViewBook()
  }, [])

  return (
    <>
      <Header />
      <div className='md:p-20 p-5'>
        <div className='shadow w-full md:p-10 p-5'>
          <div className='flex justify-end'>
            <FaRegEye onClick={() => setModalStatus(true)} />
          </div>
          <div className='md:grid grid-cols-[1fr_3fr] w-full'>
            <div>
              <img src={bookDetailes?.imageUrl} alt="" className='w-full h-100' />
            </div>
            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>{bookDetailes?.title}</h1>
              <p className='text-center text-blue-500'>{bookDetailes?.author}</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher :{bookDetailes?.publisher}</p>
                <p>Language :{bookDetailes?.language}</p>
                <p>No:of Pages :{bookDetailes?.noOfPages}</p>
              </div>
              <div className='md:flex justify-between mt-10'>
                <p>Seller Mail :{bookDetailes?.userMail}</p>
                <p>Real Price :{bookDetailes?.price}</p>
                <p>ISBN :{bookDetailes?.isbn}</p>
              </div>
              <p className='text-justify mt-10'>{bookDetailes?.abstract}</p>
              <div className='mt-10 flex justify-end'>
                <Link to={'/all-books'} className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800 me-2'><FaBackward className='mt-1 me-1' />Back</Link>
                <button type='button' onClick={handlePurchace} className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalStatus &&
        <div className='relative z-10 overflow-y-hidden'>
          <div className='bg-gray-500/25 fixed inset-0'>
            <div className='flex justify-center items-center scroll-auto min-h-screen'>
              <div className='bg-white rounded-2xl md:w-250 w-100'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Book Images</h3>
                  <button onClick={() => setModalStatus(false)}><IoMdClose /></button>
                </div>
                <div className='relative p-5'>
                  <p className='text-blue-600'>camera click of the book in the hand of the seller</p>
                </div>
                <div className='md:flex flex-wrap my-4 overflow-y-hidden'>
                  {bookDetailes?.uploadImages.length > 0 ?
                    bookDetailes?.uploadImages?.map((img, index) => (
                      <img key={index} height={'250px'} width={'250px'} src={`${SERVERURL}/imguploads/${img}`} alt="" className='mx-2 md:mb-0 mb-2' />
                    ))
                    :
                    <p className='font-bold text-red-700 ms-5'>User uploaded book images are unavailable....</p>}
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

export default ViewBook