import request from '../util/request';

export const signUp = (data) =>
    request({
        url: '/api/auth/',
        method: "POST",
        data
    })

export const signIn = (data) =>
    request({
        url: '/api/auth/signin',
        method: "POST",
        data
    })

export const getAuthInfo = () => {
    request({
        url: '/api/auth',
        method: "GET"
    })
}

