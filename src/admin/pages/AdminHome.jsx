import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { FaBook, FaUser, FaUserGraduate } from 'react-icons/fa'
import { getAllBookAdminAPI, getAllUserAdminAPI } from '../../services/allAPI'

function AdminHome() {
  const [allBooks, setAllBooks] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [token, setToken] = useState("")

  //get books
  const getAllBooks = async () => {
    try {
      const result = await getAllBookAdminAPI()
      if (result.status == 200) {
        setAllBooks(result.data.length)
      }

    } catch (error) {
      console.log(error);
    }
  }

  const getAllUsers = async ()=>{
    try {
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await getAllUserAdminAPI(reqHeader)
      if(result.status == 200){
        setAllUsers(result.data.length)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])

  useEffect(() => {
    if(token){
      getAllBooks()
      getAllUsers()
    }
  }, [token])
  return (

    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSideBar />
        </div>
        <div className='p-4 '>
          <div className='md:grid grid-cols-3 text-white'>
            <div className='px-5'>
              <div className="grid grid-cols-[1fr_3fr] bg-blue-800 rounded p-4">
                <div className='flex justify-center items-center'><FaBook className='text-3xl' /></div>
                <div>
                  <h1>Total No:of Books: <span className='text-l'>{allBooks}</span></h1>
                </div>
              </div>
            </div>
            <div className='px-5'>
              <div className="grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4">
                <div className='flex justify-center items-center'><FaUser className='text-3xl' /></div>
                <div>
                  <h1>Total No:of Users: <span className='text-l'>{allUsers}</span></h1>
                </div>
              </div>
            </div>
            <div className='px-5'>
              <div className="grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4">
                <div className='flex justify-center items-center'><FaUserGraduate className='text-3xl' /></div>
                <div>
                  <h1>No:of Applicants: <span className='text-l'>85</span></h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminHome