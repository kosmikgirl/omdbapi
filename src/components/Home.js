import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Movie } from "./Movie";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

export const Home = () => {
  const apiKey = "d937664d";
  const [title, setTitle] = useState("");
  const bySearch = `s=${title}`;

  const omdbapiURL = `http://www.omdbapi.com/?${bySearch}&apikey=${apiKey}`;

  const initialData = useFetch(omdbapiURL, { results: [] });

  return (
    <div>
      <h1>Home: Search Movies on Omdb API </h1>

        <Search
          placeholder="Search movies by Title"
          allowClear
          onChange={(e) => setTitle(e.target.value)}
          onSearch={setTitle}
          style={{
            width: 400,
          }}
        />

      <div className="movieContainer">
        {initialData &&
          initialData.map(({ Title, Poster, Type, Year, imdbID }) => (
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
