import { useState, useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { RouterProvider } from 'react-router-dom';
import './App.css'
import 'antd/dist/reset.css';
import router from "./Routes/routes"

function App() {
  
  useEffect(() => {

  }, [])

  return (
    <>
    {/* Hello
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log( jwtDecode(credentialResponse.credential));
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
