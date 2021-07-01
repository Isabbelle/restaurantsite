import React from "react";
import { useEffect, useState } from "react";

function Restaurantfetch() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const details = await response.json();
      setDetails(details.results);
      console.log(details.results);
    };
    getRestaurants();
  }, []);
  return (
    <div className="restaurant-card">
      <h1>{details.name}</h1>
      <p>{details.formatted_address}</p>
    </div>
  );
}

export default Restaurantfetch;
