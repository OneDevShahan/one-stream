"use client";

import React, { useState, useEffect } from "react";
import CategoryRow from "./CategoryRow";

const CategoryList = () => {
  const [mostWatched, setMostWatched] = useState([]);
  const [top10, setTop10] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const YOUR_OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_OMDB_API_URL;

  const movieCategories = {
    mostWatched: [
      "The Avengers",
      "Jurassic Park",
      "The Lion King",
      "Forrest Gump",
      "Frozen",
      "The Hobbit",
      "Iron Man",
      "Spider-Man",
      "Wonder Woman",
      "Black Panther",
    ],
    top10: [
      "The Dark Knight",
      "Inception",
      "Titanic",
      "Avatar",
      "Interstellar",
      "The Matrix",
      "The Shawshank Redemption",
      "Gladiator",
      "The Godfather",
      "Pulp Fiction",
    ],
    suggested: [
      "Coco",
      "Moana",
      "Inside Out",
      "Toy Story",
      "Finding Nemo",
      "Shrek",
      "Up",
      "Zootopia",
      "WALL-E",
      "Ratatouille",
    ],
    trending: [
      "Oppenheimer",
      "Barbie",
      "Mission Impossible",
      "Dune",
      "No Time to Die",
      "Black Widow",
      "The Batman",
      "Top Gun: Maverick",
      "Eternals",
      "Shang-Chi",
    ],
  };

  useEffect(() => {
    const fetchMovies = async (category, movieNames) => {
      try {
        const movieData = await Promise.all(
          movieNames.map(async (movieName) => {
            const response = await fetch(
              `${API_URL}/?t=${encodeURIComponent(
                movieName
              )}&apikey=${YOUR_OMDB_API_KEY}`
            );
            const data = await response.json();
            if (data.Response === "True") return data;
            console.warn(`Movie not found: ${movieName}`);
            return null;
          })
        );
        return movieData.filter((movie) => movie !== null);
      } catch (err) {
        console.error(`Error fetching ${category}:`, err);
        return [];
      }
    };

    const fetchAllCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        const [mostWatchedData, top10Data, suggestedData, trendingData] =
          await Promise.all([
            fetchMovies("Most Watched", movieCategories.mostWatched),
            fetchMovies("Top 10", movieCategories.top10),
            fetchMovies("Suggested", movieCategories.suggested),
            fetchMovies("Trending", movieCategories.trending),
          ]);

        setMostWatched(mostWatchedData);
        setTop10(top10Data);
        setSuggested(suggestedData);
        setTrending(trendingData);
      } catch (err) {
        setError("An error occurred while fetching movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllCategories();
  }, []);

  return (
    <div className="space-y-12">
      {error && <p className="text-center text-red-500">{error}</p>}
      <CategoryRow
        title="Most Watched"
        movies={mostWatched}
        isLoading={loading}
      />
      <CategoryRow title="Top 10" movies={top10} isLoading={loading} />
      <CategoryRow
        title="Suggested for You"
        movies={suggested}
        isLoading={loading}
      />
      <CategoryRow title="Trending" movies={trending} isLoading={loading} />
    </div>
  );
};

export default CategoryList;
