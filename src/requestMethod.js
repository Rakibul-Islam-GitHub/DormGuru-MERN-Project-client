import axios from "axios";
/*
Author: Rakibul
Contact: rakibulislam.cse21@gmail.com
web: https://arbytetechnology.com/
Linkedin: http://linkedin.com/in/rakibul21

*/
// http://localhost:3001
// process.env.REACT_APP_SERVER_LINK

const BASE_URL =  'http://localhost:3001'
let token;
let TOKEN='';
if (localStorage.getItem("token")) {
 
   token= localStorage.getItem("token")
   
   if (token) {

    TOKEN = token;
    
   }
}


export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type" : "application/json"
  }
});


export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
userRequest.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token") ? localStorage.getItem("token") : ''
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});