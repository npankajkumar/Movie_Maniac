import React from 'react'
import './MovieList.css'
import fire from '../../assets/fire.png'
import MovieCard from './MovieCard'
const MovieList = () => {
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
            <MovieCard/>
        </div>

    </section>
  )
}

export default MovieList
