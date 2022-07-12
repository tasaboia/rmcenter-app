import React, { createContext, useContext, useState } from 'react'
import { Auth } from '../service/Auth'
import { IAuthResponse } from '../service/Auth/type'
import { GetValueForStorage, SaveStorage } from '../service/storage/storage';

interface AuthContextData{
  user?: IAuthResponse
  login: (email: string, password: string) => Promise <IAuthResponse | undefined | null>
  logout: () => Promise <void>
}

export const AuthContext = createContext<AuthContextData>(
  {} as  AuthContextData,
)

interface AuthProviderProps{
  children?: React.ReactNode | React.ReactNode [];
}

export const AuthProvider: React.FC = (props: AuthProviderProps ) => {
  const [user, setUser] = useState<IAuthResponse>()

  async function login(email: string, password:string): Promise<IAuthResponse | undefined>{
    try{
      console.log("login")
      const data = await Auth({email,password})
      setUser(data)

      if(user){
        SaveStorage("acessToken", JSON.stringify(user.access))
        SaveStorage("refreshToken", JSON.stringify(user.refresh))
      }
      
    } catch (err){
      console.log(err)
    }
    return user 
  }

  async function logout() {
    setUser(undefined)
    return
  }

  return(
    <AuthContext.Provider value={{user, login, logout}}> {props.children} </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}