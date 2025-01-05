"use client"; // Add this directive to make it a Client Component

import React, { useEffect, useState } from "react";

// Modify the function to receive the 'params' prop, which contains the dynamic route parameter
const MovieDetail = ({ params }) => {
  // Access imdbID from the dynamic route params
  const { imdbID } = React.use(params);

  const [isClient, setIsClient] = useState(false); // To check if it's client-side
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_OMDB_API_URL;

  console.log("Movie ID:", imdbID); // Log the imdbID to check if it's correctly passed

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && imdbID) {
      console.log("Fetching details for movie ID:", imdbID); // Log the ID
      // Fetch movie details from OMDB API
      const fetchMovieDetails = async () => {
        try {
          const response = await fetch(
            `${API_URL}/?i=${imdbID}&apikey=${API_KEY}`
          );
          const data = await response.json();

          if (data.Response === "True") {
            setMovie(data);
          } else {
            setError(data.Error); // Handle error if movie not found
          }
        } catch (err) {
          setError("An error occurred while fetching the movie details.");
        }
      };

      fetchMovieDetails();
    }
  }, [imdbID, isClient]);

  // Handle loading state
  if (!isClient || !imdbID) {
    return (
      <div className="flex justify-center items-center h-screen text-center">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Grabbing popcorn... 🍿</div>
          <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div className="text-lg">
            We are preparing your movie experience...
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  // Ensure movie data is available before trying to render
  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen text-center">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Grabbing popcorn... 🍿</div>
          <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div className="text-lg">
            We are preparing your movie experience...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-8 mb-8">
        {/* Movie Poster */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full lg:w-[300px] h-[500px] object-cover rounded-lg shadow-lg mb-4 lg:mb-0"
        />

        {/* Movie Details */}
        <div className="flex flex-col justify-between lg:w-[300px] h-[500px] bg-black dark:bg-black dark:text-white rounded-lg shadow-md p-4 text-center lg:text-left space-y-2">
          <h1 className="text-3xl font-bold text-center">{movie.Title}</h1>
          <hr />
          <div className="text-lg font-semibold">
            Released: {movie.Released}
          </div>
          <div className="text-lg font-semibold">Runtime: {movie.Runtime}</div>
          <div className="text-lg">Genre: {movie.Genre}</div>
          <div className="text-lg">Language: {movie.Language}</div>
          <div className="text-lg">Country: {movie.Country}</div>
          <div className="text-lg">Rated: {movie.Rated}</div>
        </div>
      </div>

      {/* Plot Section */}
      <div className="dark:bg-black dark:text-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Plot</h2>
        <div className="text-lg">{movie.Plot}</div>
      </div>

      {/* Director & Writers Section */}
      <div className="dark:bg-black dark:text-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Director & Writers</h2>
        <div className="text-lg">Director: {movie.Director}</div>
        <div className="text-lg">Writer(s): {movie.Writer}</div>
      </div>

      {/* Actors Section */}
      <div className="dark:bg-black dark:text-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Actors</h2>
        <div className="text-lg">{movie.Actors}</div>
      </div>

      {/* Ratings Section */}
      <div className="dark:bg-black dark:text-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <div className="space-y-2">
          {movie.Ratings.map((rating, index) => (
            <div key={index} className="text-lg">
              {rating.Source}: {rating.Value}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="dark:bg-black dark:text-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Info</h2>
        <div className="text-lg">IMDB Rating: {movie.imdbRating}</div>
        <div className="text-lg">IMDB Votes: {movie.imdbVotes}</div>
        <div className="text-lg">Box Office: {movie.BoxOffice}</div>
      </div>
    </div>
  );
};

export default MovieDetail;
