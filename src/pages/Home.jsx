import React, { useState,useEffect } from 'react';
import {useSelector} from "react-redux"
import { Form, Input, Button, message } from 'antd';
import axios from "../axios"
import { useNavigate } from 'react-router-dom';
const home = {
    width:"50vw",
    margin:"8rem auto",

}
const Home = () => {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const info = useSelector(state=>state.user.user);
  const navigate = useNavigate();
  
async function run(){
  let check = await axios.get("/check");
    if(!check.data.success) {
      navigate("/login")
      return;
    }
}
useEffect(()=>{
 run();
},[])
  const onFinish = async (values) => {
    try {
      // console.log(values.url)
      const response = await axios.post("/shorten-url",{
        longUrl:values?.url,
        id:info._id
      });

      const data = response.data;
      setShortenedUrl(data.shortUrl);
    } catch (error) {
      console.error('Error:', error);
      message.error('Failed to shorten the URL. Please try again.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    message.success('Shortened URL copied to clipboard!');
  };

  return (
    <div className="form-wrapper" style={home}>
      <h2>URL Shortener</h2>
      <Form className="form" onFinish={onFinish}>
        <Form.Item
          label="Enter URL"
          name="url"
          rules={[
            { required: true, message: 'Please input the URL!' },
            { type: 'url', message: 'Please input a valid URL!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Shorten URL
          </Button>
        </Form.Item>
      </Form>
      {shortenedUrl && (
        <div className="shortened-url">
          <p>
            Shortened URL: 
            <span onClick={copyToClipboard} className="copy" title="Copy URL">
              {shortenedUrl}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
