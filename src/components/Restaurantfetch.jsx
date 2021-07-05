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
      <ul>
        {details.map((item) => (
          <div className="restaurantdetails">
            <img class="image" src={item.photos[0].links[0]} alt="icon" />
            <div className="servicehours">
              <p>{item.opening_hours.open_now ? " open " : " closed "}</p>
              <p>{item.pickup ? " pickup " : null} </p>
              <p>{item.delivery ? " delivery " : null}</p>
            </div>
            <p>{item.formatted_address}</p>
            <p className="name">{item.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Restaurantfetch;
