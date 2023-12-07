import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Home from "../pages/Home.jsx";
  //Routes
import UserLayout from "../layout/UserLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
 
import Login from "../pages/Login.jsx";
   
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
    )
  );
  
  export default router;