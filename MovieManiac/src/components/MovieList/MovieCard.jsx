import React from "react";
import "./MovieCard.css";
import star from "../../assets/glowingstar.png";
const MovieCard = ({ movie }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      className="movie_card"
      target="_blank"
    >
      {" "}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="movie_poster"
        alt=""
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="movie_date_rate">
          <p>{movie.release_date}</p>
          <p>
            {movie.vote_average}{" "}
            <img className="card_emoji" src={star} alt="" />
          </p>
        </div>
        <p className="movie_description">{movie.overview} </p>
      </div>
    </a>
  );
};

export default MovieCard;
