// import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieListCart from "../cart/MovieListCart";
import MovieCart from "../cart/MovieCart";
import ReactPlayer from "react-player";
import play from "../images/icon_playcinema.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [video, setVideo] = useState("");
  const [show, setShow] = useState(false);

  const fecthMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=fcce835c96d12e0fcb23e6a67acdc5c4`
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchVideos = async () => {
    const url_video = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=fcce835c96d12e0fcb23e6a67acdc5c4`;
    const response = await fetch(url_video);
    const data = await response.json();
    return data.results;
  };

  useEffect(() => {
    fecthMovies(id).then((data) => setMovie(data));
  }, []);
  useEffect(() => {
    fetchVideos(id).then((results) => setVideo(results));
  }, [id]);
  console.log(video);
  //console.log(movie);

  return (
    <>
      {movie && (
        <div className="detallemovie">
          <div className="container-fluid gx-0">
            <div
              className="container-fluid  bg-moviedetail d-flex gx-0 "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="movie-single container-fluid gx-0">
                <div className="container d-flex justify-content-center align-items-center gap-5 text-light baner">
                  <div className=" sbanerimg d-flex align-content-center">
                    <img
                      className="imgbanerposter"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>
                  <div className="banercontent d-flex flex-column text-center align-content-center">
                    <h3 className="detail_title">{movie.title}</h3>
                    <p className="slogan">{movie.tagline}</p>

                    <div className="video-trailer">
                      <img
                        className="ico-play"
                        src={play}
                        type="button"
                        onClick={() => {
                          setShow(!show);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row pb-4 mt-n1 ">
              <div className="col-sm-4">
                <div className="detailmovie">
                  <span>TITULO</span>
                  <h3>{movie.original_title}</h3>
                  <hr />
                  <span>DESCRIPCION</span>
                  <p>{movie.overview}</p>
                  <hr />
                  <span>IDIOMA ORIGINAL</span>
                  <p>{movie.original_language}</p>
                  <hr />
                  <span>GENERO</span>
                  {movie.genres.map((genr, index) => (
                    <p key={`genero_${index}`} className="generos">
                      {genr.name}
                    </p>
                  ))}

                  <div></div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="ticketmovie">
                  <MovieCart />
                </div>
              </div>
            </div>
          </div>
          <MovieListCart selectedMovie={movie} />
          <div className="player ">
            {show && (
              <div className="player d-flex flex-column mx-auto ">
                <ReactPlayer
                  playing={true}
                  url={`https://www.youtube.com/watch?v=${video[0].key}`}
                  controls={true}
                  style={{
                    minWidth: "90%",
                    left: "50%",
                    minHeight: "550px",
                    margin: "0px auto",
                    position: "relarive",
                  }}
                />
                <div
                  className="close-video"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Close
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
