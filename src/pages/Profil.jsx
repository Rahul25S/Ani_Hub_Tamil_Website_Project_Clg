import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-20">
      <nav className="w-full p-4 flex items-center justify-between fixed z-50 left-[90%] bg-gray-800">
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-lg text-sm flex items-center"
        >
          <FaSignOutAlt size={20} className="mr-2" />
          Logout
        </button>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Your Profile</h1>
        <p className="text-lg">Welcome, {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
