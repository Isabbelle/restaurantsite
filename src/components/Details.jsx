import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const details = await response.json();

      setDetails(details.results.find((restaurant) => restaurant.id === id));
      console.log(details.results);
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="detailspage">
      <h1>{details.name}</h1>
      <p>Cuisine: {details.cuisine}</p>
      <p>Address: {details.formatted_address}</p>
      <p>Price level: {details.price_level}</p>
    </div>
  );
};
