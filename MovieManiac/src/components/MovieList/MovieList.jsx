import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './MovieList.css'
import fire from '../../assets/fire.png'
import MovieCard from './MovieCard'
const MovieList = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGJiMGU3NTMxNzhhNjk0ODY0Y2IwZGYwNWEzZWZlNCIsIm5iZiI6MTcyNzI4ODI3My4zNzUwNTMsInN1YiI6IjY2ZjQ1MDQ4M2E5NWE1YmNkYTIzMTMxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-cOEzWmFFge994kQnRU9tGFZ178J3ir5ji-3qnytzA',
            },
          }
        );
        console.log(response.data.results)
        setMovies(response.data.results); // Assuming the relevant data is in the response
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='movie_list'>
        <header  className='movie_list_header'>

            <h2 className='movie_list_heading'>Popular <img className='navbar_emoji' src={fire} alt="" /></h2>

<div className='movie_list_fs'>
    <ul className='movie_filter'>
        <li className="movie_filter_item active">8+star</li>
        <li className="movie_filter_item">7+star</li>
        <li className="movie_filter_item">6+star</li>
    </ul>

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
            {
                movies.map(movie=>
                    <MovieCard key={movie.id} movie={movie}/>
                )
            }
        </div>

    </section>
  )
}

export default MovieList
