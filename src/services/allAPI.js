import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//register
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody, {})
}

//login
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody, {})
}

export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/google-login`, reqBody, {})
}

export const getHomeBookAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/home-books`)
}

// ---------------------------------users-----------------------------------------

export const addBookAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

export const getAllBookAPI = async (searchKey, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/all-books?search=${searchKey}`, "", reqHeader)
}

export const getABookAPI = async (id, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/view-books/${id}`, "", reqHeader)
}

export const getBookStatusAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/userbooks`,"",reqHeader)
}

export const deleteUserAddedBookAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/delete-book/${id}`)
}

export const getPurchaseHistoryAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-brought-book`,"",reqHeader)
} 

export const putProfileDetailesAPI = async(reqBody, reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/update-user-profile`,reqBody,reqHeader)
} 

export const makePaymentAPI = async (reqBody, reqHeader) =>{
    return await commonAPI("PUT",`${SERVERURL}/make-payment`, reqBody, reqHeader)
}

//---------------------------------admin-----------------------------------------

export const getAllBookAdminAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/admin-allbooks`)
}

//update book status
export const updateBookStatusAdminAPI = async (id) => {
    return await commonAPI("PUT", `${SERVERURL}/update-book/${id}`)
}

//get all users
export const getAllUserAdminAPI = async (reeqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/admin-allusers`,"",reeqHeader)
}

// update admin profile
export const updateAdminProfileAPI = async(reqBody, reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/update-admin-profile`,reqBody,reqHeader)
}