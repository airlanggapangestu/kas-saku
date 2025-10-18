import React from "react";

const Header = ({ user = { name: "Rangga" }, onLogout }) => {
  return (
    <div className="w-full flex justify-between items-center bg-white text-gray-800 p-6 fixed top-0 left-0 z-50 shadow border-gray-200">
      {/* Kiri: Kassaku */}
      <h1 className="text-2xl font-bold">Kas Saku</h1>

      {/* Kanan: Profil + Logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{user.name[0]}</div>
          <span>rangga</span>
        </div>
        <button onClick={onLogout} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
