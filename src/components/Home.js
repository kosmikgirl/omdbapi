import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Movie } from "./Movie";

export const Home = () => {
  const apiKey = "d937664d";
  const [title, setTitle] = useState("");
  const bySearch = `s=${title}`;

  const omdbapiURL = `http://www.omdbapi.com/?${bySearch}&apikey=${apiKey}`;

  const initialData = useFetch(omdbapiURL, { results: [] });

  useEffect(() => {
    console.log(initialData, "initial");
  }, [initialData]);

  return (
    <div>
      <h1>Home</h1>
      <form>
        <input
          type="search"
          name="search-movie"
          id="search-movie"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </form>
      <div className="movieContainer">
        {initialData &&
          initialData.map(({ Title, Poster, Type, Year, imdbID }) => (
            <Movie title={Title} poster={Poster} type={Type} year={Year} id={imdbID} />
          ))}
      </div>
    </div>
  );
};
