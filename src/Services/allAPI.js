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

// all blogs
export const allBlogAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/blogs/all`,"",reqHeader)
}



// user bolgs
export const userBLogAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-blogs`,"",reqHeader)
}

// edit blogs
export const editBlogAPI = async(blogId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/blogs/edit/${blogId}`,reqBody,reqHeader)
}

// delete blog
export const deleteblogAPI = async(blogId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/blog/remove/${blogId}`,{},reqHeader)
}



// edit user
export const editUserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/update`,reqBody,reqHeader)
}