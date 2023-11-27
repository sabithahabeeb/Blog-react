import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


// register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// add blogs
export const addBlogAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/blogs/add`,reqBody,reqHeader)

}