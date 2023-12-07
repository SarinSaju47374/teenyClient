import {useEffect} from 'react';
import axios from "../axios";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import {loginUser, logoutUser} from "../toolkit/userSlice.js"
import {message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function reset(){
    await axios.post("/reset");
  }
  useEffect(()=>{
    reset()
    dispatch(logoutUser());
  },[])
  return (
    <div className="login">
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--lgax4Fwh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/l94n0a9tqt7oi91h80os.gif" alt="" />
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          let data = jwtDecode(credentialResponse.credential);
          let response = await axios.post("/login",{data})
          if(response.data.success){
            dispatch(loginUser(response.data.success))
            message.success("You will be redirected to the Home page")
            setTimeout(()=>{
              navigate("/")
            },1000)
          }else{
            message.error("Your email ain't verified")
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  )
}

export default Login
