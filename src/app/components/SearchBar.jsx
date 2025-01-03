"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MovieCard from "./MovieCard";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]); // Store the API results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const YOUR_OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLoading(true);
      setError(null);

      try {
        // Make the API call to OMDB
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchQuery}&apikey=${YOUR_OMDB_API_KEY}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setResults(data.Search); // Set results in state
        } else {
          setError(data.Error); // Handle error response
        }
      } catch (err) {
        setError("An error occurred while fetching the data.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClear = () => {
    setSearchQuery("");  // Clear the search query
    setResults([]);      // Clear the search results
    setError(null);      // Reset the error state
  };

  return (
    <div className="dark:bg-gray-900 py-4">
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <form
          onSubmit={handleSearch}
          className="relative flex items-center w-3/4 sm:w-1/2 lg:w-1/3"
        >
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 
                     dark:bg-gray-700 bg-gray-200 dark:text-white text-black transition-transform transform hover:scale-105"
          />

          {/* Conditional Icons */}
          {searchQuery && results.length > 0 ? (
            // Clear Icon (Cross)
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 p-1 text-gray-500 dark:text-gray-300 hover:scale-125 transition-transform"
            >
              ✖️
            </button>
          ) : (
            // Magnifier Icon
            <button
              type="submit"
              className="absolute right-3 p-1 bg-transparent text-gray-500 dark:text-gray-300 hover:scale-125 transition-transform"
            >
              🔍
            </button>
          )}
        </form>
      </div>

      {/* Display Loading or Error */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display Results */}
      <div className="dark:bg-gray-900 dark:text-white mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {" "}
          {/* Use flex-wrap for wrapping */}
          {results.length > 0 && (
            <h2 className="text-2xl font-bold mb-4 w-full text-center">
              Showing results for: {searchQuery}
            </h2>
          )}
          {results.length > 0 &&
            results.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
