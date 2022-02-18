import React from "react";

import Passenger from "./Passenger";
import classes from "./PassengerLists.module.css";
import Card from "../UI/Card";

function PassengerLists({ passengers, removePassengers }) {
  return (
    <Card>
      <ul className={classes.list}>
        {passengers.map((passenger, index) => (
          <Passenger
            key={index}
            id={index}
            name={passenger.name}
            age={passenger.age}
            removePassenger={removePassengers}
          />
        ))}
      </ul>
    </Card>
  );
}

export default PassengerLists;
