import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Common/Navbar";
import Footer from "../Pages/Common/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
