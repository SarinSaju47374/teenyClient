import { Outlet, useNavigate, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar";
import CustomFooter from "../components/CustomerFooter";
const UserLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <CustomFooter />
    </>
  );
};

export default UserLayout;        