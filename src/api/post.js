import request from '../util/request';

export const registerNewPost = async(data) =>
    request({
        url: '/api/post',
        method: "POST",
        data
    })

export const getAllPosts = async() =>
    request({
        url: '/api/post',
        method: "GET",
    })

export const deletePostByPostId = async(data) =>
    request({
        url: '/api/post',
        method: "DELETE",
        data
    })


 
 


