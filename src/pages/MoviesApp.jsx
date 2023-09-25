// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "../components/Slider";
import Search from "../components/search";
import { Link } from "react-router-dom";

const MoviesApp = () => {
  const [movies, setMovies] = useState([]);
  // const [search, setSearch] = useState('');
  // const [categories, setCategories] = useState([]);

  const API_KEY = "fcce835c96d12e0fcb23e6a67acdc5c4";
  const URL_IMG = "https://image.tmdb.org/t/p/w500/";
  const getMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    getMovies().then((results) => setMovies(results));
  }, []);

  return (
    <>
      <Slider />
      <Search />
      <section className="container my-5">
        <h3 className="text-center text-light mb-4" >CARTELERA SEMANAL CINEMA G3</h3>
        <div className="col-sm d-flex gap-4 flex-wrap  justify-content-center">
           {movies.map((movie) => {
            return (
              
              <article key={movie.id} className="movie_single">
                <Link to={`/movie/details/${movie.id}`}>
                <div className="cards">
                  <img
                    className="img-cards"
                    src={`${URL_IMG}${movie.poster_path}`}
                  />
                </div>  
                <button className="btn btn-dark btn-orange"
             
                >Salas y Horarios
                  
                </button></Link> 
               
              </article>
            );
          })}
        </div>
      </section>

     
    </>

  );
};

export default MoviesApp;
