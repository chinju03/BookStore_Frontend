import React, { use, useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { updateAdminProfileAPI } from '../../services/allAPI'
import { toast } from 'react-toastify'
import SERVERURL from '../../services/serverURL'
import { adminProfileUpdate } from '../../context/ContextShare'

function AdminSettings() {
  const [token, setToken] = useState("")
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    profile: ""
  })
  const [existingProfile, setExistingProfile] = useState("")
  const [preview, setPreview] = useState("")

  const {setAdminProfileUpdateStatus} = useContext(adminProfileUpdate)

  const handleReset = () => {
    let user = JSON.parse(sessionStorage.getItem("existingUser"))
    setAdminDetails({ ...adminDetails, username: user.username, password: user.password, confirmPassword: user.password })
    setExistingProfile(user.profile)
    setPreview("")

  }

  const handleFile = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    setPreview(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async () => {

    const { username, password, confirmPassword } = adminDetails

    if (username && password && confirmPassword) {
      if (password === confirmPassword) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }

        if (preview) {
          const reqBody = new FormData()
          for (let key in adminDetails) {
            reqBody.append(key, adminDetails[key])
          }

          try {
            const result = await updateAdminProfileAPI(reqBody, reqHeader)
            console.log(result);
            if (result.status == 200) {
              toast.success("Profile updated successfully")
              setAdminProfileUpdateStatus(result.data)
              sessionStorage.setItem("existingUser", JSON.stringify(result.data))
            } else {
              toast.error("Something went wrong")
            }

          } catch (error) {
            console.log(error);

          }
        }
        else {

          try {
            const result = await updateAdminProfileAPI({ username, password, profile: existingProfile }, reqHeader)
            console.log(result);
            if (result.status == 200) {
              toast.success("Profile updated successfully")
              setAdminProfileUpdateStatus(result.data)
              sessionStorage.setItem("existingUser", JSON.stringify(result.data))

            } else {
              toast.error("Something went wrong")
            }

          } catch (error) {
            console.log(error);
          }
        }
      }
      else {
        toast.error("Password and Confirm Password must be same")
      }
    }
    else {
      toast.error("All fields are required")
    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
      let user = JSON.parse(sessionStorage.getItem("existingUser"))
      setAdminDetails({ ...adminDetails, username: user.username, password: user.password, confirmPassword: user.password })
      setExistingProfile(user.profile)
    }
  }, [])


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
                    <input onChange={(e) => handleFile(e)} type="file" id='edituserprofile' style={{ display: "none" }} />
                    {existingProfile == "" ?
                      <img src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPx5Ngn3BqU_b1o4MO5-90QnJXVEdVLYmaA&s"} alt="" style={{ width: '170px', height: '170 px', borderRadius: '50%' }} />
                      :
                      <img src={preview ? preview : `${SERVERURL}/imguploads/${existingProfile}`} alt="" style={{ width: '170px', height: '170 px', borderRadius: '50%' }} />

                    }

                  </label>
                </div>
                <div className='mb-3'>
                  <label htmlFor="">Username</label>
                  <input value={adminDetails?.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} type="text" placeholder='username' className='bg-white w-full rounded p-2' />
                </div>
                <div className='mb-3'>
                  <label htmlFor="">Password</label>
                  <input value={adminDetails?.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} type="text" placeholder='password' className='bg-white w-full rounded p-2' />
                </div>
                <div className='mb-3'>
                  <label htmlFor="">Confirm Password</label>
                  <input value={adminDetails?.confirmPassword} onChange={(e) => setAdminDetails({ ...adminDetails, confirmPassword: e.target.value })} type="text" placeholder='confirm password' className='bg-white w-full rounded p-2' />
                </div>
                <div className='flex justify-between mt-10'>
                  <button type='button' onClick={handleReset} className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                  <button type='button' onClick={handleSubmit} className='bg-green-600 text-white rounded p-4 w-1/2 hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
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