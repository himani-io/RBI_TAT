import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#0f0a0e] text-white">
      <Sidebar />

      <div className="flex-1 ml-64 p-8 md:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <Navbar />

          <div className="mt-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
