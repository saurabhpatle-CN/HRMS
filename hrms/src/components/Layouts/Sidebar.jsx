import  { useState } from 'react';
import { LayoutDashboard, Users, BarChartBig, MessageSquare, UserPlus, Headphones, LogOut } from 'lucide-react';
 
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
 
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'HR Tasks', icon: <BarChartBig size={20} /> },
    { name: 'Employee Management', icon: <Users size={20} /> },
    { name: 'Performance Management', icon: <BarChartBig size={20} /> },
    { name: 'Engagement and Feedback', icon: <MessageSquare size={20} /> },
    { name: 'Employee Engagement Initiative', icon: <UserPlus size={20} /> },
  ];
 
  return (
    <div className="flex flex-col h-screen bg-blue-400 text-white w-68 py-6 px-4 ml-8">
      {/* Logo/Header Section */}
      <div className="flex items-center gap-2 mb-10 pl-2 bg-blue-500 rounded-xl py-3" >
        <div className="bg-blue-500 text-white w-8 h-8 rounded flex items-center justify-center font-bold">
          DB
        </div>
        <span className="font-medium">Dashboard</span>
      </div>
     
      {/* Menu Items */}
      <div className="flex-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 py-3 px-2 rounded-md cursor-pointer hover:bg-blue-500 transition-colors ${
              activeItem === item.name ? '' : ''
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <div className="text-gray-300">{item.icon}</div>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
     
      {/* Bottom Actions */}
      <div className="mt-auto">
        <div className="flex items-center gap-3 py-3 px-2 rounded-md cursor-pointer hover:bg-blue-500 transition-colors mb-4">
          <div className="text-gray-300">
            <Headphones size={20} />
          </div>
          <span className="text-sm">Contact Support</span>
        </div>
       
        <div className="flex items-center gap-3 py-3 px-2 rounded-md cursor-pointer hover:bg-blue-500 transition-colors">
          <div className="text-gray-300">
            <LogOut size={20} />
          </div>
          <span className="text-sm">Log Out</span>
        </div>
      </div>
    </div>
  );
};
 
export default Sidebar;