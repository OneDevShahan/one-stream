import { useRef } from "react";
import MovieCard from "./MovieCard";

const CategoryRow = ({ title, movies, isLoading }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white mb-8 relative">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {isLoading ? (
        <p className="text-center text-blue-500">Loading {title}...</p>
      ) : movies.length === 0 ? (
        <p className="text-center text-gray-500">
          No movies available for {title}.
        </p>
      ) : (
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={scrollLeft}
          >
            &#8592; {/* Replace with an icon */}
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll gap-4 scrollbar-hide scroll-smooth"
          >
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
            onClick={scrollRight}
          >
            &#8594; {/* Replace with an icon */}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryRow;
