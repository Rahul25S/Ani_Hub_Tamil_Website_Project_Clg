import React from "react";

const MovieBox = ({ imageSrc, label1, label2, title, redirectLink }) => {

  const handleBoxClick = () => {
    window.location.href = redirectLink;
  };

  return (
    <div
      className="w-[270px] h-[450px] p-2 bg-gray-800 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleBoxClick}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[80%] object-cover rounded-md"
      />
      <div className="flex gap-2 mt-2">
        <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">
          {label1}
        </span>
        <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded">
          {label2}
        </span>
      </div>
      <h3 className="mt-2 text-sm text-white">{title}</h3>
    </div>
  );
};

export default MovieBox;
