import axios from 'axios';

const baseURL  = import.meta.env.VITE_SERVER_URL;
const instance = axios.create({
  withCredentials:true,    
  baseURL: baseURL,
  headers:{
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
  }
});

export default instance;    