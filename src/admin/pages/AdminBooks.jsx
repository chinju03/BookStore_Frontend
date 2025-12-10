import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { getAllBookAdminAPI, getAllUserAdminAPI, updateBookStatusAdminAPI } from '../../services/allAPI'

function AdminBooks() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [userListStatus, setUserListStatus] = useState(false)
  const [allBooks, setAllBooks] = useState([])
  const [token, setToken] = useState("")
  const [allUsers, setAllUsers] = useState([])

  const getAllBooks = async () => {
    try {
      const result = await getAllBookAdminAPI()
      console.log(result);
      if (result.status == 200) {
        setAllBooks(result.data)
      }

    } catch (error) {
      console.log(error);
    }
  }

  const updateBookStatus = async (id) => {
    console.log(id);
    try {
      const result = await updateBookStatusAdminAPI(id)
      console.log(result);
      getAllBooks()
    } catch (error) {
      console.log(error);
    }
  }

  const getAllUsers = async () => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getAllUserAdminAPI(reqHeader)
      console.log(result);
      if (result.status == 200) {
        setAllUsers(result.data)
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllBooks()
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])
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
            <p onClick={() => { setBookListStatus(false), setUserListStatus(true), getAllUsers() }} className={userListStatus ? 'text-blue-500 p-4 border-b border-gray-200 cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
          </div>

          {bookListStatus && (
            <div className='md:grid grid-cols-4 w-full my-4'>

              {allBooks?.length > 0 ?
                allBooks?.map((book, index) => (
                  <div key={index} className='shadow rounded p-3 m-4'>
                    <img src={book.imageUrl} alt="" width={'100%'} height={'300px'} />
                    <div className='flex justify-center flex-col items-center mt-4'>
                      <p>{book.title}</p>
                      <p>{book.author} </p>
                      <p>{book.dPrice}</p>
                      {book?.status == "pending" &&
                        <button onClick={() => updateBookStatus(book?._id)} className='w-full mt-3 p-3 rounded border bg-green-700 text-white hover:border-green-600 hover:bg-white hover:text-green-600'>
                          Approve
                        </button>
                      }
                      {book?.status == "approved" &&
                        <div className='w-full flex justify-end'>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBah0vIbqBfES4ObtAESuS_5Cle1NNyDw-w&s" alt="" style={{ width: "50px", borderRadius: "50%" }} />
                        </div>
                      }
                    </div>
                  </div>
                ))

                :
                <p className='text-red-700'>No Books Available....</p>}
            </div>)}

          {userListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>

              {allUsers?.length > 0 ?
              allUsers?.map((user,index)=>(
                <div key={index} className='shadow rounded p-2 m-2 bg-gray-200'>
                  <p className='text-red-700 font-bold'>ID: {user?._id}</p>
                  <div className='flex items-center mt-3'>
                    <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" width={'70px'} height={'70px'} style={{ borderRadius: '50%' }} />
                    <div className='w-full flex flex-col ml-3'>
                      <p className='text-blue-800 text-lg font-bold'>Username:{user?.username}</p>
                      <p>Email:{user?.email}</p>
                    </div>
                  </div>
                </div>
              ))
                
                :
                <p className='text-red-700'>No Books Available....</p>}
            </div>}
        </div>
      </div>
    </>
  )
}

export default AdminBooks