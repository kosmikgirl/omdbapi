import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Movie } from "../Movie/Movie";
import './Home.css';
import { Input, Checkbox } from "antd";


const { Search } = Input;
const apiKey = process.env.REACT_APP_API_ACCESS_TOKEN;

export const Home = () => {
  const [title, setTitle] = useState("");
  const [isMovie, setMovie] = useState(true);
  const [isSeries, setSeries] = useState(false);

  const bySearch = `s=${title}`;
  const addType = isSeries ? `series` : `movie`;

  const omdbapiURL = `http://www.omdbapi.com/?${bySearch}&type=${addType}&apikey=${apiKey}`;

  const initialMovieData = useFetch(omdbapiURL, { results: [] });

  useEffect(() => {
    console.log(initialMovieData, isSeries, isMovie, omdbapiURL);
  }, [initialMovieData]);

  return (
    <div>
      <h1>Home: Search Movies on Omdb API </h1>

      <div>
        <h2>Search by:</h2>
        <Checkbox
          checked={isSeries}
          onChange={(e) => setSeries(e.target.checked)}
        >
          Series
        </Checkbox>
        <Checkbox
          checked={isMovie}
          onChange={(e) => setMovie(e.target.checked)}
        >
          Movies
        </Checkbox>
      </div>

      <Search
        placeholder="Search movies by Title"
        allowClear
        onChange={(e) => setTitle(e.target.value)}
        onSearch={setTitle}
        style={{
          width: 400,
          paddingBlock: "1rem",
        }}
      />

      <div className="movie-container">
        {initialMovieData &&
          initialMovieData.map(({ Title, Poster, Type, Year, imdbID }) => (
            <Movie
              key={imdbID}
              title={Title}
              poster={Poster}
              type={Type}
              year={Year}
              id={imdbID}
            />
          ))}
      </div>
    </div>
  );
};
