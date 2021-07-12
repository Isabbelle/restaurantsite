import React from "react";
import imagewelcome from "../images/imagewelcome.jpg";

export const Welcome = () => {
  return (
    <>
      <img className="welcomeImage" src={imagewelcome} />
      <div className="text">
              <h1>Welcome</h1>
              <h2>Where would you like to eat?</h2>
      </div>
    </>
  );
};
