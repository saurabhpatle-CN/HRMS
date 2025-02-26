
import React from "react";
import Sidebar from "../../components/Layouts/Sidebar";

const Dashboard = () => {
  return (

    <div className="flex h-screen bg-gradient-to-br from-[#73abe031] to-[rgba(3,183,249,0.53)]">
      {/* Sidebar (Left Side) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center items-center">
      </div>
    </div>
  );
};

export default Dashboard;

