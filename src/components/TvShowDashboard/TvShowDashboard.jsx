import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TvShowDashboard.css";
const TvShowDashboard = () => {
  const [tvShow, setTvShow] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setTvShow(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!tvShow) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Show List</h1>
      <div className="container">
        {tvShow.map((list) => (
          <div
            key={list.show.id}
            className="show-card"
            onClick={() => navigate(`/detail/${list.show.id}`)}
          >
            <img
              src={list.show.image?.medium || list.show.image?.original}
              alt={list.show.name}
              className="movie-poster"
            />
            <h2 className="show-title">{list.show.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShowDashboard;
