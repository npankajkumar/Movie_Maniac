import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "../FilterGroup/FilterGroup";
const MovieList = ({ title, api, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filteredmovies, setFilteredmovies] = useState([]);

  const [minrating, setMinrating] = useState(0);

  useEffect(() => {
    // Fetch movie data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${api}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGJiMGU3NTMxNzhhNjk0ODY0Y2IwZGYwNWEzZWZlNCIsIm5iZiI6MTcyNzI4ODI3My4zNzUwNTMsInN1YiI6IjY2ZjQ1MDQ4M2E5NWE1YmNkYTIzMTMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-cOEzWmFFge994kQnRU9tGFZ178J3ir5ji-3qnytzA",
            },
          }
        );
        setMovies(response.data.results);
        setFilteredmovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  const handelfilter = (rate) => {
    if (minrating === rate) {
      setFilteredmovies(movies);
      setMinrating(0);
    } else {
      setMinrating(rate);
      const filteredmovies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilteredmovies(filteredmovies);
    }
  };

  return (
    <section id={title} className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          {title} <img className="navbar_emoji" src={emoji} alt="" />
        </h2>

        <div className="movie_list_fs">
          <FilterGroup
            minRating={minrating}
            onRatingClick={handelfilter}
            ratings={[8, 7, 6]}
          />

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredmovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
