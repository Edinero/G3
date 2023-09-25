
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Searchfetch =  () => {
const[ movies,setMovies] = useState([]) 
const [search, setSearch] = useState('')

const URL_IMG = "https://image.tmdb.org/t/p/w500/";
const API_KEY = "fcce835c96d12e0fcb23e6a67acdc5c4";
const searchApp = async (search='hulk') => {
  const URL_SEARCH = "https://api.themoviedb.org/3/search/movie?query=";
      const URL = `${URL_SEARCH}${search}&api_key=${API_KEY}`;
      const response = await fetch(URL);
      const data = await response.json();
      return data.results;
      //https://api.themoviedb.org/3/search/movie?
    }



useEffect(()=>{
searchApp(search)
.then( results => setMovies(results)


)

} , [search])

const handleChange =  (event) => {
  const value = event.target.value
  setSearch(value)
}
const handleSearch =  (event) => {
  // event.preventDefault();
  // const form = document.forms['mysearch']
  // const search = form.query
  // console.log(form.query.value)
  setSearch(search.value)
}



  return (
    <>
    <div className='container bg-dark-3 py-3'>
        <div className="col text-light text-center">
            <h3>Bienvenido</h3>
            <p>Encuentra ahora tu Pelicula Favorita</p>
            <div className="search my-3">
            <div className="input-group mb-3 px-5">
              <form className="input-group mb-3" id="mysearch"
             >
  <input 
  onChange={handleChange} 
  value={search} 
  name="query"
  type="text" 
  className="form-control cinema-search focus-ring focus-ring-danger" 
  placeholder="nombre de la pelicula" 
  aria-describedby="button-addon2" />
  <button 
  type="submit" 
  className="btn btn-outline-secondary btn-search" 
  id="button-addon2"
  onClick={handleSearch}>Buscar</button>

  </form>
</div>

            </div>

        </div>

    </div>

{<section className="container ">
         <div className="col-sm d-flex gap-4 flex-wrap  justify-content-center mt-4">
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
                <button className="btn btn-dark btn-orange">
                  salas y horarios
                </button></Link>
              </article>
            );
          })}
        </div>
      </section> }

      </>
  )
}

export default Searchfetch