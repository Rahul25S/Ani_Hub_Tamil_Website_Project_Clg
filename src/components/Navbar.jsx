import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg("bg-gray-900 bg-opacity-70");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full p-2 flex items-center justify-between fixed z-50 ${navbarBg} transition-all duration-300`}
    >
      <Link to="/">
        <img
          src="anihubtamil1.png"
          alt="AniHub Tamil"
          className="h-12 sm:h-16 md:h-16"
        />
      </Link>
      {user ? (
        <div className="flex items-center">
          <Link to="/profile">
            <button className="capitalize bg-blue-600 px-4 py-2 rounded cursor-pointer text-white text-sm sm:px-6 sm:py-2 md:mr-4">
              Profile
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <Link to="/login">
            <button className="capitalize text-white pr-2 sm:pr-4 text-sm">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="capitalize bg-blue-600 px-4 py-2 rounded cursor-pointer text-white text-sm sm:px-6 sm:py-2">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
