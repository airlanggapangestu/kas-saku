import React from "react";
import { FaHome, FaList, FaChartBar } from "react-icons/fa";

const Sidebar = ({ active, setActive }) => {
  const menu = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Transactions", icon: <FaList /> },
    { name: "Reports", icon: <FaChartBar /> },
  ];

  return (
    <>
      {/* Desktop Sidebar (Fixed) */}
      <div className="hidden md:flex w-64 bg-white text-gray-800 flex-shrink-0 p-4 flex-col mt-4 shadow-md fixed top-0 left-0 bottom-0">
        <h1 className="text-2xl font-bold mb-9 text-center">Kas Saku</h1>
        <ul className="flex-1 flex flex-col gap-2">
          {menu.map((item) => (
            <li key={item.name} className={`flex items-center gap-3 p-2 rounded cursor-pointer ${active === item.name ? "bg-gray-200" : "hover:bg-gray-100"}`} onClick={() => setActive(item.name)}>
              {item.icon} <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 w-full md:hidden bg-white text-gray-800 shadow-t z-50 border-t border-gray-200">
        <div className="flex justify-around p-2">
          {menu.map((item) => (
            <button key={item.name} className={`flex flex-col items-center justify-center text-sm ${active === item.name ? "text-blue-600" : "text-gray-800"}`} onClick={() => setActive(item.name)}>
              {item.icon}
              <span className="truncate max-w-[60px]">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
