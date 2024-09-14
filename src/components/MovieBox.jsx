import React from 'react';
import { arrayUnion, arrayRemove, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const MovieBox = ({ imageSrc, label1, label2, title, isLiked, onLike, redirectLink }) => {
  const { user } = useAuth();

  const toggleFavShow = async () => {
    if (user) {
      try {
        const userDoc = doc(db, 'users', user.email);
        const docSnap = await getDoc(userDoc);
        const favShowsList = docSnap.data().favShows || [];

        if (favShowsList.includes(title)) {
          await updateDoc(userDoc, {
            favShows: arrayRemove(title),
          });
        } else {
          await updateDoc(userDoc, {
            favShows: arrayUnion(title),
          });
        }
        onLike(); // Update local like status
      } catch (error) {
        console.error("Error toggling favorite show: ", error);
      }
    } else {
      alert("Login to save anime");
    }
  };

  const handleBoxClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div 
      className="w-40 md:w-48 p-2 bg-gray-800 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleBoxClick}
    >
      <img src={imageSrc} alt={title} className="w-full h-64 object-contain rounded-md" />
      <div className="flex gap-2 mt-2">
        <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">{label1}</span>
        <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded">{label2}</span>
        <span
          className="px-2 py-1 text-xs text-white bg-gray-600 rounded cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the redirection
            toggleFavShow();
          }}
        >
          {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </span>
      </div>
      <h3 className="mt-2 text-sm text-white">{title}</h3>
    </div>
  );
};

export default MovieBox;