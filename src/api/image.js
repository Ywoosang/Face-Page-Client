import request from '../util/request';

export const getPixabayImage = async(keyword) =>
    request({
        url: `/api/image/pixabay?keyword=${keyword}`,
        method: "GET",
    })

export const uploadImage = async(data) => 
    request({
        url: "/api/image/upload",
        method: "POST",
        data
    })

export const manipulateImage = async(data) => 
    request({
        url: "/api/image/fit",
        method: "POST",
        data
    })


 
 


