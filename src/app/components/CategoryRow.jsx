import MovieCard from "./MovieCard";

const CategoryRow = ({ title, movies }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 dark:text-white mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
