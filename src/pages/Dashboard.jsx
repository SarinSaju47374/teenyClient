import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import axios from "../axios"
import './Dashboard.css'; // Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let id = useSelector(state=>state.user.user?._id);
  let [data,setData] = useState([])
  const navigate = useNavigate();

  async function run(){
    let check = await axios.get("/check");
    if(!check.data.success) {
      navigate("/login")
      return;
    }
    let response = await axios.get("/urls",{
      params:{id}
    })
    setData(response.data.urls)

  }
  useEffect(()=>{
    run();
  },[])
 
  const columns = [
    {
      title: 'Original Link',
      dataIndex: 'longUrl',
      key: 'longUrl',
      ellipsis: true,
    },
    {
      title: 'Shortened URL',
      dataIndex: 'shortCode',
      key: 'shortCode',
      ellipsis: true,
      render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span onClick={() => copyToClipboard(text)} style={{cursor:"pointer"}}>{`${import.meta.env.VITE_SERVER}/${text}`}</span>
          <Button
            icon={<CopyOutlined />}
            onClick={() => copyToClipboard(import.meta.env.VITE_SERVER+"/"+text)}
            style={{ marginLeft: 8 }}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: 'Clicks',
      dataIndex: 'click',
      key: 'click',
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    message.success('Shortened URL copied to clipboard');
  };

  return (
    <div className="table-container">
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Dashboard;
