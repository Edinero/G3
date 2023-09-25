const URL_IMG = "https://image.tmdb.org/t/p/w500/";

export const getMovies = async () => {
  const API_KEY = "fcce835c96d12e0fcb23e6a67acdc5c4";
  const URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
//https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}

  return data.results

};
