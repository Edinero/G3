import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const URL_IMG = "https://image.tmdb.org/t/p/w500/";
const MoviesTop = () => {
  const [moviestop, setMoviesTop] = useState([]);
  
  const getMoviesTop = async () => {

    const URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=fcce835c96d12e0fcb23e6a67acdc5c4`;
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    getMoviesTop().then((results) => setMoviesTop(results));
  }, []);
console.log(moviestop)
  return (
    <div>
      <section className="container my-5">
        <h3 className="text-center text-light mb-4">Peliculas Top</h3>
        <div className="col-sm d-flex gap-4 flex-wrap  justify-content-center">
            
          {moviestop.map((movie) => {
            return (
              <article key={movie.id} className="movie_single">
                <Link to={`/movie/details/${movie.id}`}>
                  <div className="cards">
                    <img
                      className="img-cards"
                      src={`${URL_IMG}${movie.poster_path}`}
                    />
                  </div>
                  <button className="btn btn-dark btn-orange">
                    Salas y Horarios
                  </button>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MoviesTop;
