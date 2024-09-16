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
        setNavbarBg("bg-gray-900 bg-opacity-90");
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
      className={`w-full p-1 lg:p-2 flex items-center justify-between fixed z-50 ${navbarBg} transition-all duration-300`}
    >
      <Link to="/">
        <img
          src="anihubtamil1.png"
          alt="AniHub Tamil"
          className="lg:h-12 h-8"
        />
      </Link>
      {user ? (
        <div className="flex items-center">
          <Link to="/profile">
            <button className="capitalize bg-blue-600 px-1 py-1 lg:text-auto lg:px-4 lg:py-2 rounded cursor-pointer text-white text-sm ">
              Profile
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <Link to="/login">
            <button className="capitalize text-white text-sm lg:text-auto lg:pr-2 w-16 ">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="capitalize bg-blue-600 lg:text-auto px-1 py-1  lg:px-4 lg:py-2 rounded cursor-pointer text-white text-sm ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
