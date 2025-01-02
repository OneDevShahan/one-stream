import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative bg-gray-200 dark:bg-black dark:text-white w-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl m-4">
      {/* Poster Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={movie.src}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Play Icon on Hover */}
        <a
          href="#"
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-white transition-colors duration-300 group-hover:text-red-500"
          >
            <path d="M5 3.868c0-1.323 1.536-2.055 2.645-1.335l11.68 7.132c1.11.679 1.11 2.26 0 2.94L7.645 19.737C6.536 20.457 5 19.726 5 18.403V3.868z" />
          </svg>
        </a>
      </div>

      {/* Content Section */}
      <div className="p-4 text-center">
        <a
          href="#"
          className="block text-lg font-semibold hover:text-red-500 transition-colors duration-300"
        >
          {movie.title}
        </a>
        <a
          href="#"
          className="block text-sm text-gray-500 hover:text-red-400 transition-colors duration-300"
        >
          {movie.releaseYear}
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
