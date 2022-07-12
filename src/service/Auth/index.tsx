import React from 'react'
import { http } from '../http'

import { IAuthInput, IRegisterInput, IAuthResponse } from './type'


//Register user
export async function registerUser(data: IRegisterInput) {
    console.log(data)
    const result = await http.post("/user/register/", data)
    return result.data.result 
}

//Auth user
export async function Auth(data: IAuthInput): Promise<IAuthResponse>{
    const result = await http.post("/api/authentication/", data)
    return result.data
}
