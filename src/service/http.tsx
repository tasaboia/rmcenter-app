import axios from "axios"
import { storage } from "./storage/storage";

export const http = axios.create({
  baseURL: 'http://localhost:8000',
})  

// interface Itoke {
//   token: string | null 
// } 
// http.interceptors.request.use(
//   function(config) {
//     if (!!storage.getSessionToken()) {
//       const token: Itoke = JSON.parse(storage.getSessionToken() || 'null') 
//       config.headers!.Authorization = `Bearer ${token}` 
//     }
//     return config 
//   },
//   function(error) {
//     return Promise.reject(error) 
//   }
// ) 
