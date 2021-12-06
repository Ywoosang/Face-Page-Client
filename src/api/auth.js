import request from '../util/request';

export const signUp = async(data) =>
    request({
        url: '/api/auth/signup',
        method: "POST",
        data
    })

export const signIn = async(data) =>
    request({
        url: '/api/auth/signin',
        method: "POST",
        data
    })

export const snsSignIn = async(sns) =>
    request({
        url: `/api/auth/${sns}`,
        method: "GET"
    })

export const signOut = async() =>
    request({
        url: `/api/auth/signout`,
        method: "GET"
    })


export const getAuthInfo = async() => 
    request({
        url: '/api/auth',
        method: "GET"
    })

 


