import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import SERVERURL from '../../services/serverURL'
import { putProfileDetailesAPI } from '../../services/allAPI'
import { toast } from 'react-toastify'
import { userProfileUpdate } from '../../context/ContextShare'


function EditProfile() {
    const [offcanvas, setOffcanvas] = useState(false)
    const [token, setToken] = useState("")
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        bio: "",
        role: "",
        profile: ""
    })
    const [existingProfile, setExistingProfile] = useState("")
    const [preview, setPreview] = useState("")

    const { setUpdateProfileStatus } = useContext(userProfileUpdate)


    // console.log(userDetails);
    // console.log(existingProfile);

    const handleUserImage = (e) => {
        setUserDetails({ ...userDetails, profile: e.target.files[0] })
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const handleSubmit = async () => {

        const { username, password, confirmPassword, bio, profile } = userDetails

        if (username && password && confirmPassword && bio) {
            if (password === confirmPassword) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }

                if (preview) {
                    const reqBody = new FormData()
                    for (let key in userDetails) {
                        reqBody.append(key, userDetails[key])
                    }

                    try {
                        const result = await putProfileDetailesAPI(reqBody, reqHeader)
                        console.log(result);
                        if (result.status == 200) {
                            toast.success("Profile updated successfully")
                            setOffcanvas(false)
                            setUpdateProfileStatus(result)
                            sessionStorage.setItem("existingUser", JSON.stringify(result.data))

                        }

                    } catch (error) {
                        console.log(error);

                    }
                }
                else {
                    const reqBody = {
                        username: userDetails.username,
                        password: userDetails.password,
                        bio: userDetails.bio,
                        role: userDetails.role,
                        profile: existingProfile
                    }
                    try {
                        const result = await putProfileDetailesAPI(reqBody, reqHeader)
                        console.log(result);
                        if (result.status == 200) {
                            toast.success("Profile updated successfully")
                            setOffcanvas(false)
                            setUpdateProfileStatus(result)
                            sessionStorage.setItem("existingUser", JSON.stringify(result.data))
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

    const handlereset = () => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserDetails({ username: user.username, password: user.password, confirmPassword: user.password, bio: user.bio, role: user.role })
        setExistingProfile(user.profile)
        setPreview("")

    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setUserDetails({ username: user.username, password: user.password, confirmPassword: user.password, bio: user.bio, role: user.role })
            setExistingProfile(user.profile)

        }
    }, [])
    return (
        <>
            <button onClick={() => setOffcanvas(true)} className='flex text-blue-600 px-4 py-3 font-bold border border-blue-200'> <FaRegEdit className='mt-1 me-2' />Edit</button>

            {offcanvas &&
                <div>
                    <div className='bg-gray-400/75 fixed inset-0 w-full h-full'></div>
                    <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
                        <div className='bg-gray-800 px-3 py-4 flex justify-between text-white text-2xl'>
                            <h2>Edit User Profile</h2>
                            <button onClick={() => setOffcanvas(false)}>X</button>
                        </div>
                        <div className='flex justify-center items-center flex-col my-5'>
                            <label htmlFor="userProfile">
                                <input onChange={(e) => handleUserImage(e)} type="file" id='userProfile' style={{ display: "none" }} />
                                {existingProfile == "" ?
                                    <img src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"} alt="" style={{ height: '150px', width: '150px', borderRadius: '50%' }} />
                                    :
                                    <img src={preview ? preview : `${SERVERURL}/imguploads/${existingProfile}`} alt="" style={{ height: '150px', width: '150px', borderRadius: '50%' }} />
                                }

                            </label>
                        </div>
                        <div className='mt-2 mb-2 w-full px-5 '>
                            <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='username' className='w-full border border-gray-200 placeholder-gray-500 p-2 rounded' />
                        </div>
                        <div className='mt-2 mb-3 w-full px-5 '>
                            <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='password' className='w-full border border-gray-200 placeholder-gray-500 p-2 rounded' />
                        </div>
                        <div className='mt-2 mb-3 w-full px-5 '>
                            <input value={userDetails.confirmPassword} onChange={(e) => setUserDetails({ ...userDetails, confirmPassword: e.target.value })} type="text" placeholder='confirm password' className='w-full border border-gray-200 placeholder-gray-500 p-2 rounded' />
                        </div>
                        <div className='mt-2 mb-2 w-full px-5 '>
                            <textarea value={userDetails.bio} onChange={(e) => setUserDetails({ ...userDetails, bio: e.target.value })} type="text" placeholder='bio' className='w-full border border-gray-200 placeholder-gray-500 p-2 rounded' />
                        </div>
                        <div className='mt-2 mb-2 w-full px-5 '>
                            <input value={userDetails.role} onChange={(e) => setUserDetails({ ...userDetails, role: e.target.value })} type="text" placeholder='role' className='w-full border border-gray-200 placeholder-gray-500 p-2 rounded' />
                        </div>
                        <div className='flex justify-end w-full px-5'>
                            <button type='button' onClick={handlereset} className='bg-amber-600 text-white rounded  hover:border-amber-600 hover:text-amber-600 hover:bg-white  border py-2 px-4   '>Reset</button>
                            <button onClick={handleSubmit} type='button' className='bg-green-600 text-white rounded  hover:border-green-600 hover:text-green-600 hover:bg-white ms-3 border py-2 px-4'>Update</button>
                        </div>
                    </div>
                </div>}

        </>
    )
}

export default EditProfile