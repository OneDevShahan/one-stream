const API_BASE_URL = process.env.NEXT_PUBLIC_OMDB_API_URL;

export const fetchMovies = async (query) => {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const url = `${API_BASE_URL}?apikey=${apiKey}&s=${query}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "True") {
    return data.Search; // Returns the array of movies
  } else {
    throw new Error(data.Error); // Handles errors from API
  }
};
