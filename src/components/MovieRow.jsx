import React, { useState } from "react";
import MovieBox from "./MovieBox.jsx";
import { movieData } from "../components/MovieData.jsx";

const MovieRow = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState({});

  const toggleBookmark = (index) => {
    setBookmarkedMovies((prevBookmarks) => ({
      ...prevBookmarks,
      [index]: !prevBookmarks[index],
    }));
  };

  return (
    <div className="p-4">
      <h1 className="font-nsans-medium text-2xl md:text-4xl p-4 text-white">
        POPULAR
      </h1>

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {movieData.map((movie, index) => (
          <MovieBox
            key={index}
            imageSrc={movie.imageSrc}
            label1={movie.label1}
            label2={movie.label2}
            title={movie.title}
            isBookmarked={bookmarkedMovies[index]}
            onBookmark={() => toggleBookmark(index)}
            redirectLink={movie.redirectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
