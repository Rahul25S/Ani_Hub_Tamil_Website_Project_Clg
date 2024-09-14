import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [navbarBg, setNavbarBg] = useState('bg-transparent');

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg('bg-blue-900'); // Set to a solid color when scrolled
      } else {
        setNavbarBg('bg-transparent'); // Transparent at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full p-4 flex items-center justify-between fixed z-50 ${navbarBg} transition-all duration-300`}>
      <Link to="/">
        <h1 className="uppercase text-white cursor-pointer text-2xl sm:text-3xl md:text-5xl font-nsans-bold">
          Ani-Land Tamil
        </h1>
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
            <button className="capitalize text-white pr-2 sm:pr-4 text-sm">Login</button>
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
