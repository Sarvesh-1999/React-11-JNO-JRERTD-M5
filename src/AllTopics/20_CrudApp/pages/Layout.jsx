import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main className="">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
