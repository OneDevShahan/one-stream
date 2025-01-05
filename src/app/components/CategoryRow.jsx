import { useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import MovieCard from "./MovieCard";

const CategoryRow = ({ title, movies, isLoading }) => {
  const scrollContainerRef = useRef(null);

  const scrollByAmount = 300;

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white mb-8 relative">
      {/* Category Title */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {isLoading ? (
        <p className="text-center text-blue-500">
          <div className="flex justify-center items-center h-screen text-center">
            <div className="space-y-4">
              <div className="text-xl font-semibold">{title}</div>
              <div className="text-xl font-semibold">
                Grabbing popcorn... 🍿
              </div>
              <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
              <div className="text-lg">
                We are preparing your movie experience...
              </div>
            </div>
          </div>
        </p>
      ) : movies.length === 0 ? (
        <p className="text-center text-gray-500">
          No movies available for {title}.
        </p>
      ) : (
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <IoIosArrowDropleft size={24} />
          </button>

          {/* Scrollable Movies Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll gap-4 scrollbar-hide scroll-smooth px-2"
          >
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <IoIosArrowDropright size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryRow;
