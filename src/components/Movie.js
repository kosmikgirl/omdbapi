import React from "react";

export const Movie = ({ title, poster, type, year, id }) => {
  return (
    <div className="movieBox">
      <h1>{title}</h1>
      {poster !== 'N/A' && <img src={poster} /> }
      <p>Type: {type}</p> <p>Year Released: {year}</p>
    </div>
  );
};
