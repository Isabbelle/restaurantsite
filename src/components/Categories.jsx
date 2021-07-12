import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Categories = () => {
  const [results, setResults] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const data = await response.json();
      console.log(data.results);
      setResults(data.results);
      setFilteredRestaurants(data.results);
    };
    getRestaurant();
  }, []);

  const openButton = () => {
    const openRestaurants = results.filter(
      (item) => item.opening_hours.open_now
    );
    setFilteredRestaurants(openRestaurants);
    console.log(openRestaurants);
  };

  const closedButton = () => {
    const closedRestaurants = results.filter(
      (item) => item.opening_hours.open_now === false
    );
    setFilteredRestaurants(closedRestaurants);
    console.log(closedRestaurants);
  };

  const pickupButton = () => {
    const pickupRestaurants = results.filter((item) => item.pickup === true);

    setFilteredRestaurants(pickupRestaurants);
    console.log(pickupRestaurants);
  };

  const deliveryButton = () => {
    const deliveryRestaurants = results.filter((item) => item.delivery);
    setFilteredRestaurants(deliveryRestaurants);
    console.log(deliveryRestaurants);
  };

  const allRestaurantsButton = () => {
    const allRestaurants = results.map((item)=>item);
    setFilteredRestaurants(allRestaurants)
  }

  return (
    <div className="categories">
      <>
        <Link to="/all">
          <button className="all" onClick={allRestaurantsButton}>
            All restaurants{" "}
          </button>
        </Link>
        <Link to="/opennow">
          <button className="open" onClick={openButton}>
            Open{" "}
          </button>
        </Link>
        <Link to="/closed">
          <button className="closed" onClick={closedButton}>
            Closed{" "}
          </button>
        </Link>
        <Link to="/delivery">
          <button className="delivery" onClick={deliveryButton}>
            Delivery{" "}
          </button>
        </Link>
        <Link to="/pickup">
          <button className="pickup" onClick={pickupButton}>
            Pickup{" "}
          </button>
        </Link>
      </>
      <div className="restaurant-card">
        <ul>
          {filteredRestaurants &&
            filteredRestaurants.map((item) => (
              <div className="restaurantdetails">
                <img
                  className="image"
                  src={item.photos[0].links[0]}
                  alt="icon"
                />
                <div className="servicehours">
                  <p>{item.opening_hours.open_now ? " open " : " closed "}</p>
                  <p>{item.pickup ? " pickup " : null} </p>
                  <p>{item.delivery ? " delivery " : null}</p>
                </div>
                <p>{item.formatted_address}</p>
                <Link to={`/detailspage/${item.id}`}>
                  <p className="name">{item.name}</p>
                </Link>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};
