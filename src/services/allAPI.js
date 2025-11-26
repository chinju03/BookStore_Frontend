import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//register
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST" , `${SERVERURL}/register`,reqBody,{})
}

//login
export const loginAPI = async(reqBody)=>{
    return await commonAPI("POST" , `${SERVERURL}/login`,reqBody,{})
}

export const getHomeBookAPI = async()=>{
    return await commonAPI("GET" , `${SERVERURL}/home-books`)
}

// ---------------------------------users-----------------------------------------

export const addBookAPI = async(reqBody, reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-book`,reqBody,reqHeader)
}

export const getAllBookAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-books`,"",reqHeader)
}