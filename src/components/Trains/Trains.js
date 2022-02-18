import React, { Fragment } from "react";

import classes from "./Trains.module.css";
import TrainItem from "./TrainItem";

function Trains({ trains, stationDetails }) {
    
  return (
    <div>
      <Fragment>
        <ul className={classes.list}>
          {trains.map((train) => (
            <TrainItem
              key={train.id}
              id={train.id}
              name={train.name}
              fare={train.fare}
              boarding= {stationDetails.from}
              destination = {stationDetails.to}

            />
          ))}
        </ul>
      </Fragment>
    </div>
  );
}

export default Trains;
