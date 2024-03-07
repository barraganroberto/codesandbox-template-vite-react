import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen flex-col bg-red-100 overflow-y-hidden">
      <Navbar />
      <div className="flex h-full">
        <div className="w-60 bg-gray-200">Sidebar</div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
