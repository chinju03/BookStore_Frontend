import React, { useContext, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { googleLoginAPI, loginAPI, registerAPI } from '../../services/allAPI'
import { toast } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { userAuthContext } from '../../context/AuthContext'

function Auth({ register }) {

  const [Eye, setEye] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const {setAuthorisedUser} = useContext(userAuthContext)

  const navigate = useNavigate()

  const handleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("fill all the detailes")
    } else {
      const result = await registerAPI(userDetails)
      console.log(result);
      if (result.status == 200) {
        toast.success('Registered succesfully')
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      } else {
        toast.error('something went wrong')
      }
    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info('fill all the fields')
    } else {
      const result = await loginAPI(userDetails)
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        setAuthorisedUser(true)
        toast.success('login successfull')
        if (result.data.existingUser.role == 'admin') {
          navigate('/admin-home')
        } else {
          navigate('/')
        }
        setUserDetails({
          email: "",
          password: ""
        })

      } else if (result.status == 404) {
        toast.warning(result.response.data)
      } else if (result.status == 401) {
        toast.warning(result.response.data)
      } else {
        toast.error('something went wrong!!!!!')
      }

    }

  }

  const handlegoogle = async (credentialResponse) => {
    console.log(credentialResponse.credential);
    const googleData = jwtDecode(credentialResponse.credential)
    console.log(googleData);
    try {
      const result = await googleLoginAPI({ password: "googlepassword", email: googleData.email, username: googleData.name, profile: googleData.picture })
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        setAuthorisedUser(true)
        toast.success('login successfull')
        if (result.data.existingUser.role == 'admin') {
          navigate('/admin-home')
        } else {
          navigate('/')
        }
      }else{
        toast.error('something went wrong!!!!!')
      }

    } catch (error) {
      console.log(error);

    }
  }

  console.log(userDetails);


  return (
    <>
      <div className=' w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://img.freepik.com/free-vector/watercolor-muted-colors-pattern-design_23-2150003053.jpg?semt=ais_hybrid&w=740&q=80)] bg-cover '>
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-center'>BOOKSTORE</h1>
          <div style={{ width: "400px" }} className='bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center'>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className='border mt-3 flex justify-center items-center'> <FaCircleUser className='text-7xl' />
            </div>
            <h1 className='text-2xl'>{register ? "Register" : "Login"}</h1>
            <form action="">
              {register &&
                <div className='my-5'>
                  <label htmlFor="">Username</label>
                  <input type="text" value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} placeholder='username' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
                </div>
              }

              <div className='my-5'>
                <label htmlFor="">Email</label>
                <input type="email" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} placeholder='email' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
              </div>
              <div className="my-5 ">
                <label htmlFor="">Password</label>
                <div className="flex ">
                  <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} className="bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black" type={Eye ? "text" : "password"} placeholder="password" name="" id="" />

                  {Eye ? <button type="button" onClick={() => { setEye(!Eye) }} style={{ marginLeft: "-20px" }} className="text-black"><FaEye /> </button>
                    :
                    <button type="button" onClick={() => { setEye(!Eye) }} style={{ marginLeft: "-20px" }} className="text-black"><FaEyeSlash /> </button>}
                </div>
              </div>
              <div className='mt-2'>
                <p className='text-xs text-orange-400'>*Never share your password with others</p>
              </div>
              <div className='mt-4'>
                {register ? <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded'>Register</button> :
                  <button type='button' onClick={handleLogin} className='bg-green-700 p-2 w-full rounded'>Login</button>}
              </div>
              <div>
                {/* google auth */}
                {!register &&
                  <div className='mt-3'>
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        handlegoogle(credentialResponse)
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />

                  </div>}
              </div>
              <div className='mt-3'>
                {register ? <p>Are you Already a user <Link className='text-blue-400' to={'/login'} >Login</Link></p> :
                  <p>Are you a new user <Link className='text-blue-400' to={'/register'} >Register</Link></p>
                }
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Auth