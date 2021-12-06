import request from '../util/request';

export const getPixabayImage = async(keyword) =>
    request({
        url: `/api/image/pixabay?keyword=${keyword}`,
        method: "GET",
    })
 


 
 


