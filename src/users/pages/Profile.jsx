import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { MdOutlineVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { addBookAPI, deleteUserAddedBookAPI, getBookStatusAPI, getPurchaseHistoryAPI } from '../../services/allAPI'
import { useParams } from 'react-router-dom'
import EditProfile from '../components/EditProfile'
import SERVERURL from '../../services/serverURL'
import { userProfileUpdate } from '../../context/ContextShare'


function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [historyStatus, setHistoryStatus] = useState(false)
  const [preview, setPreview] = useState("")
  const [allUploadImages, setAllUpdateImages] = useState([])
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [bookStatusDetailes, setBookStatusDetailes] = useState([])
  const [deleteBookStatus, setDeleteBookStatus] = useState(false)
  const [broughtBook, setBroughtBook] = useState([])
  const [userDetails, setUserDetails] = useState({
    bio: "",
    profile: ""
  })
  const [bookDetailes, setBookDetailes] = useState({
    title: "",
    author: "",
    noOfPages: "",
    imageUrl: "",
    price: "",
    dPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadImages: []
  })
  // console.log(bookDetailes);
  const { updateProfileStatus } = useContext(userProfileUpdate)

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    const fileArray = bookDetailes.uploadImages
    fileArray.push(e.target.files[0])
    setBookDetailes({ ...bookDetailes, uploadImages: fileArray })
    //convert file to url
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    let images = allUploadImages
    images.push(url)
    setAllUpdateImages(images)
  }

  // console.log(allUploadImages);

  const handleAddBook = async () => {
    const { title, author, noOfPages, imageUrl, price, dPrice, abstract, publisher, language, isbn, category, uploadImages } = bookDetailes
    if (!title || !author || !noOfPages || !imageUrl || !price || !dPrice || !abstract || !publisher || !language || !isbn || !category || uploadImages.length == 0) {
      toast.info("fill all the detailes")
    }
    else {
      //reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      //reqBody- formData() append-reqBody.append(key,value) 
      //reqBody.append("title", title)
      const reqBody = new FormData()
      for (let key in bookDetailes) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetailes[key])
        }
        else {
          bookDetailes.uploadImages.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }
      try {
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("book added successfully")
        }
        else if (result.status == 401) {
          toast.warning(result.response.data)
        }
        else {
          toast.error("error in adding book")
        }
      } catch (error) {
        toast.error("something went wrong")
      }
    }
  }

  // const handleReset = ()=>{

  // }

  const handleUserBook = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

    try {
      const result = await getBookStatusAPI(reqHeader)
      console.log(result.data);
      setBookStatusDetailes(result.data)

    } catch (error) {
      console.log(error);
    }

  }

  const handleDeletBook = async (id) => {
    try {
      const result = await deleteUserAddedBookAPI(id)
      console.log(result);

      if (result.status == 200) {
        setDeleteBookStatus(true)
        toast.success("book deleted successfully")
      } else {
        toast.error("something went wrong")
      }

    } catch (error) {
      console.log(error);

    }
  }

  const handlepurchaseHistory = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getPurchaseHistoryAPI(reqHeader)
      console.log(result.data);
      setBroughtBook(result.data)

    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }

    if (sessionStorage.getItem("existingUser")) {
      const name = JSON.parse(sessionStorage.getItem("existingUser"))
      setUsername(name.username)
      setUserDetails({ bio: name.bio, profile: name.profile })

    }
  }, [updateProfileStatus])

  useEffect(() => {
    if (bookStatus == true) {
      handleUserBook()
    }
    handlepurchaseHistory()
  }, [bookStatus, deleteBookStatus, historyStatus])



  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div className='bg-white p-3' style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={userDetails.profile == "" ? "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
        : userDetails.profile.startsWith("https")? userDetails.profile 
        :`${SERVERURL}/imguploads/${userDetails.profile}`} alt="" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>{username}</h1>
          <MdOutlineVerified className='text-blue-500 ms-3 text-xl' />
        </div>
        <div>
          <EditProfile />
        </div>
      </div>
      <p className='md:px-20 px-5 ny-5 text-justify'>{userDetails.bio}</p>

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
                <input type="text" value={bookDetailes.title} onChange={(e) => setBookDetailes({ ...bookDetailes, title: e.target.value })} placeholder='Title' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2 rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.author} onChange={(e) => setBookDetailes({ ...bookDetailes, author: e.target.value })} placeholder='Author' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.noOfPages} onChange={(e) => setBookDetailes({ ...bookDetailes, noOfPages: e.target.value })} placeholder='No:OF Pages' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.price} onChange={(e) => setBookDetailes({ ...bookDetailes, price: e.target.value })} placeholder='Price' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.dPrice} onChange={(e) => setBookDetailes({ ...bookDetailes, dPrice: e.target.value })} placeholder='DiscountPrice' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.imageUrl} onChange={(e) => setBookDetailes({ ...bookDetailes, imageUrl: e.target.value })} placeholder='ImageUrl' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>

              <div className='mb-3'>
                <textarea value={bookDetailes.abstract} onChange={(e) => setBookDetailes({ ...bookDetailes, abstract: e.target.value })} placeholder='Abstract' className='w-full placeholder-gray-400 bg-white text-black px-3 py-2' />
              </div>
            </div>
            <div className='md:my-10 mt-5 px-2 '>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.publisher} onChange={(e) => setBookDetailes({ ...bookDetailes, publisher: e.target.value })} placeholder='Publisher' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.language} onChange={(e) => setBookDetailes({ ...bookDetailes, language: e.target.value })} placeholder='Language' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.isbn} onChange={(e) => setBookDetailes({ ...bookDetailes, isbn: e.target.value })} placeholder='ISBN' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='mb-3'>
                <input type="text" value={bookDetailes.category} onChange={(e) => setBookDetailes({ ...bookDetailes, category: e.target.value })} placeholder='Category' className='w-full placeholder-gray-400 p-2 bg-white text-black rounded' />
              </div>
              <div className='flex justify-center items-center mt-10 flex-col'>
                {preview ?
                  <img src={preview} alt="" style={{ width: '200px', height: '200px' }} />
                  :
                  <label htmlFor="uploadbookimg">
                    <input type="file" onChange={(e) => { handleFile(e) }} style={{ display: "none" }} id='uploadbookimg' alt='noimage' />
                    <img src="https://static.vecteezy.com/system/resources/previews/035/868/900/non_2x/illustration-of-upload-vector.jpg" alt="" style={{ width: '300px', height: '300px' }} />
                  </label>}

                {preview &&
                  <div className='mt-10 flex items-center gap-5'>
                    {
                      allUploadImages.map((item) => (
                        <img src={item} alt="" style={{ width: '50px', height: '50px' }} />
                      ))
                    }
                    {allUploadImages.length < 3 &&
                      <label htmlFor="uploadbookimg" className='ms-4'>
                        <input type="file" onChange={(e) => { handleFile(e) }} style={{ display: "none" }} id='uploadbookimg' alt='noimage' />
                        <img src="https://static.vecteezy.com/system/resources/previews/035/868/900/non_2x/illustration-of-upload-vector.jpg" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%', }} />
                      </label>}
                  </div>}
              </div>

              <div className=' flex md:justify-end justify-center mt-5'>
                <button className='bg-amber-600 text-white rounded p-4 me-3 hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                <button type='button' onClick={handleAddBook} className='bg-green-600 text-white rounded p-4  hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      }

      {bookStatus &&
        <div className='p-10 my-20 shadow rounded'>

          {bookStatusDetailes?.length > 0 ?
            bookStatusDetailes.map((item, index) => (
              <div key={index} className='bg-gray-400 p-5 rounded mt-4'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                  <div className='px-4'>
                    <h1 className='text-2xl'>{item.title}</h1>
                    <h2>{item.author}</h2>
                    <h3 className='text-blue-800'>{item.price}</h3>
                    <p>{item.abstract}</p>
                    <div className='flex mt-2'>
                      {item?.status == "pending" ? <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" style={{ width: '70px', height: '70px' }} />
                        : item?.status == "approved" ? <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="" style={{ width: '70px', height: '70px' }} />
                          : <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" style={{ width: '70px', height: '70px' }} />}
                    </div>
                  </div>
                  <div className='px-4 mt-4 md:mt-4'>
                    <img src={item.imageUrl} alt="" className='w-full' style={{ height: '240px' }} />
                    <div className='flex justify-end mt-4'>
                      <button onClick={() => { handleDeletBook(item?._id) }} type='button' className='p-2 rounded bg-red-800 text-white hover:border hover:border-red-800 hover:text-red-800 hover:bg-white'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
            :
            <div className='flex justify-center items-center flex-col'>
              <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
              <p className='text-red-700'>No Books Added Yet....</p>
            </div>}

        </div>
      }

      {historyStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {broughtBook?.length > 0 ?
            broughtBook.map((item, index) => (
              <div key={index} className='bg-gray-400 p-5 rounded mt-4'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                  <div className='px-4'>
                    <h1 className='text-2xl'>{item?.title}</h1>
                    <h2>{item?.author}</h2>
                    <h3 className='text-blue-800'>₹{item?.price}</h3>
                    <p>{item?.abstract}</p>

                  </div>
                  <div className='px-4 mt-4 md:mt-4'>
                    <img src={item?.imageUrl} alt="" className='w-full' style={{ height: '240px' }} />
                  </div>
                </div>
              </div>
            ))

            :
            <div className='flex justify-center items-center flex-col'>
              <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
              <p className='text-red-700'>No Books Added Yet....</p>
            </div>}

        </div>
      }

      <Footer />
    </>
  )
}

export default Profile