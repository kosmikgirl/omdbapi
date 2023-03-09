import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Movie } from "../Movie/Movie";
import './Home.css';
import { Input, Checkbox } from "antd";
import { Check } from "../Checkbox/Checkbox";


const { Search } = Input;
const apiKey = process.env.REACT_APP_API_ACCESS_TOKEN;

export const Home = () => {
  const [title, setTitle] = useState('');
  const [isMovie, setMovie] = useState(true);
  const [isSeries, setSeries] = useState(true);
  
  const bySearch = `s=${title}`;
  const type = isSeries ? `series` : `movie`;

  const addType = (isSeries || isMovie) ? `&type=${type}`: '';

  const omdbapiURL = `http://www.omdbapi.com/?${bySearch}${addType}&apikey=${apiKey}`;

  const initialMovieData = useFetch(omdbapiURL, { results: [] });

  const setAll = (value) => {
    setSeries(value)
    setMovie(value)
  }

  const checkboxes = [
    {checked: isSeries, method: setSeries, label: 'Series'},
    {checked: isMovie, method: setMovie, label: 'Movies'},
    {checked: (isMovie && isSeries) || (!isMovie && !isSeries), method: setAll, label: 'All Types'}
  ]

  return (
    <div>
      <h1>Home: Search Movies on Omdb API </h1>
      <div>
        <h2>Search by:</h2>
        {checkboxes.map((box) => <Check key={box.label} checked={box.checked} onCheckboxChange={box.method} label={box.label}/>)}
      </div>

      <Search
        placeholder="Search by title"
        allowClear
        onChange={(e) => setTitle(e.target.value)}
        onSearch={setTitle}
        style={{
          width: 400,
          paddingBlock: "1rem",
        }}
      />

      <div className="movie-container">
        {initialMovieData ?
          initialMovieData.map(({ Title, Poster, Type, Year, imdbID }) => (
            <Movie
              key={imdbID}
              title={Title}
              poster={Poster}
              type={Type}
              year={Year}
              id={imdbID}
            />
          )) : <p>No Results... yet! &#128517;</p>}
      </div>
    </div>
  );
};
