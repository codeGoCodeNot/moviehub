import Navbar from "@/components/layout/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
