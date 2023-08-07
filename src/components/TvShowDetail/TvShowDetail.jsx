// src/components/ShowDetails.js
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TvShowDetail.css";
import Form from "../Form/Form";
import { DetailContext } from "../../context/DetailContext";

const TvShowDetail = () => {
  const { id } = useParams();
  const { show, setShow } = useContext(DetailContext);
  const [form, setFrom] = useState(false);
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setShow(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleBookTicket = () => {
    form ? setFrom(false) : setFrom(true);
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="show-details-container">
        <h1>Show Details</h1>
        <img src={show.image.medium} alt={show.name} />
        <h2>{show.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: show.summary }} />
        <button onClick={handleBookTicket}>Book Ticket</button>
        <div>{form && <Form></Form>}</div>
      </div>
    </>
  );
};

export default TvShowDetail;
