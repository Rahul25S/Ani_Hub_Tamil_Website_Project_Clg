import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../services/firebase";
import MovieBox from "../components/MovieBox";
import { movieData } from "../components/MovieData";

const Profile = () => {
  const { user, logOut } = useAuth();
  const [likedMovies, setLikedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLikedMovies = async () => {
      if (user) {
        try {
          const userDoc = doc(db, "users", user.email);
          const docSnap = await getDoc(userDoc);
          const favShows = docSnap.data()?.favShows || [];
          setLikedMovies(favShows);
        } catch (error) {
          console.error("Error fetching liked movies:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchLikedMovies();
  }, [user]);

  const toggleFavShow = async (title) => {
    if (user) {
      try {
        const userDoc = doc(db, "users", user.email);
        const docSnap = await getDoc(userDoc);
        const favShowsList = docSnap.data().favShows || [];

        if (favShowsList.includes(title)) {
          await updateDoc(userDoc, {
            favShows: arrayRemove(title),
          });
          setLikedMovies((prev) => prev.filter((movie) => movie !== title));
        } else {
          await updateDoc(userDoc, {
            favShows: arrayUnion(title),
          });
          setLikedMovies((prev) => [...prev, title]);
        }
      } catch (error) {
        console.error("Error toggling favorite show: ", error);
      }
    } else {
      alert("Login to save anime");
    }
  };

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
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Liked Movies</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            {likedMovies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {likedMovies.map((title, index) => {
                  const movie = movieData.find((m) => m.title === title);

                  if (!movie) {
                    return (
                      <div
                        key={index}
                        className="w-[270px] h-[450px] p-2 bg-gray-800 rounded-md shadow-lg flex items-center justify-center text-white"
                      >
                        <p>Image not available</p>
                      </div>
                    );
                  }

                  return (
                    <MovieBox
                      key={index}
                      imageSrc={movie.imageSrc || "/images/default-image.jpg"}
                      label1={movie.label1 || "N/A"}
                      label2={movie.label2 || "N/A"}
                      title={title}
                      isLiked={true}
                      onLike={() => toggleFavShow(title)}
                      redirectLink={movie.redirectLink}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="text-lg">You haven't liked any movies yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
