import { Layout, Menu } from 'antd';
import {useNavigate} from "react-router-dom"
const { Header } = Layout;
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Header className="header" style={{ width: '100vw', display: 'flex', justifyContent: 'space-between',alignItems:"center"}}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center',cursor:"pointer" }} onClick={()=>navigate("/")}>
        <img src="https://cdn-icons-png.flaticon.com/512/5220/5220478.png" style={{ width: '50px' }} alt="Logo" />
        <span style={{ color: 'white', fontFamily: 'cursive', marginLeft: '8px' }}>TeenyTiny</span>
      </div>

      <Menu theme="dark"   className="menu menu-container">
        <Menu.Item key="home" onClick={()=>navigate("/")}>Home</Menu.Item>
        <Menu.Item key="dashboard" onClick={()=>navigate("/dashboard")}>Dashboard</Menu.Item>  
      </Menu>
    </Header>
  );
};

export default Navbar;
