import React from "react";
import './Movie.css';

export const Movie = ({ title, poster, type, year, id }) => {
  return (
    <div className="movie-box">
      <h1>{title}</h1>
      {poster !== 'N/A' && <img src={poster} className="image-poster" /> }
      <p>Type: {type}</p> <p>Year Released: {year}</p>
    </div>
  );
};
