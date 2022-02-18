import React from "react";

import classes from "./Passenger.module.css";

function Passenger({ name, age, id, removePassenger }) {
  const handleRemove = () => {
    removePassenger(id);
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </blockquote>
      </figure>
      <button className="btn" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
}

export default Passenger;
