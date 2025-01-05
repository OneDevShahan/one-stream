import Image from "next/image";
import Link from "next/link"; // Use Link for navigation

const MovieCard = ({ movie }) => {
  console.log(movie.imdbID); // Log the imdbID to ensure it's correct
  const isValidImageUrl = (url) => {
    return (
      url && url.startsWith("http") && /\.(jpg|jpeg|png|gif|webp)$/.test(url)
    );
  };

  return (
    <div className="group relative dark:bg-black dark:text-white w-48 flex-shrink-0 rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl m-4">
      {/* Poster Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={
            isValidImageUrl(movie.Poster) !== "N/A" &&
            movie.Poster.startsWith("http")
              ? movie.Poster
              : `/No_Poster.png`
          }
          alt={movie.Title || "No Poster Available"}
          layout="fill"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
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
        {/* Wrap the title with a Next.js Link */}
        <Link href={`/movie/${movie.imdbID}`} passHref>
          <div className="block text-lg font-semibold hover:text-red-500 transition-colors duration-300">
            {movie.Title}
          </div>
        </Link>
        {/* Wrap the year with a Next.js Link */}
        <Link href={`/movie/${movie.imdbID}`} passHref>
          <div className="block text-sm text-gray-500 hover:text-red-400 transition-colors duration-300">
            {movie.Year}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
