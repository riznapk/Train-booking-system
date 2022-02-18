import { useEffect } from "react";
import { useState } from "react";

import classes from "./HighlightedTicket.module.css";
import { getTrainDetails } from "../AppData/stationLists";

const HighlightedTicket = (props) => {
  const [train, setTrain] = useState({});

  useEffect(() => {
    const trainInfo = getTrainDetails(props.id);
    setTrain(trainInfo);
  }, [props.id]);
  console.log(train);
  return (
    <figure className={classes.quote}>
      <p>
        {train.id} | {train.name}
      </p>
      <p className={classes.stations}>
				Boarding: {props.boarding} | Destination: {props.destination}
			</p>
      <figcaption>Fare: {train.fare}/km</figcaption>
    </figure>
  );
};

export default HighlightedTicket;
