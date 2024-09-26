import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="movie_filter">
      {ratings.map((rate) => (
        <li
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate}+star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
