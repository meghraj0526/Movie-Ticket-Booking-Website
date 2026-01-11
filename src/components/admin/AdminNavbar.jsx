import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
      <Link>
        <img src={assets.logo2} alt="logo" className="w-75 h-20" />
      </Link>
    </div>
  );
};

export default AdminNavbar;
