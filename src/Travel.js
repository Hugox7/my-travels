import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <h1>{destination}</h1>
      <h2>{country}</h2>
      <p>{distance}</p>
    </figcaption>
  </figure>
);

export default Travel;