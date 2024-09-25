import React from "react";
import "./MovieCard.css";
import star from "../../assets/glowingstar.png";
const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      {" "}
      <img
        src="https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg"
        className="movie_poster"
        alt=""
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate">
          <p>10-10-2020</p>
          <p>
            8.2{" "} <img className="card_emoji" src={star} alt="" />
          </p>
        </div>
        <p className="movie_description">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          officiis aut mollitia reprehenderit ducimus{" "}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
