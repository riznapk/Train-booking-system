import React, { useRef, useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import classes from "./TrainForm.module.css";
import Card from "../../UI/Card";
import {
  getStations,
  getTrainsBetweenStations,
} from "../../AppData/stationLists";
import Trains from "./Trains";

function TrainForm() {
  const [enteredStationDetails, setEnteredStationDetails] = useState({
    from: "",
    to: "",
  });

  const [stationLists, setStationLists] = useState([]);
  const [toStationLists, setToStationLists] = useState([]);
  const [trainLists, setTrainLists] = useState([]);

  const fromInputRef = useRef();
  const toInputRef = useRef();

  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    history.push("/login");
  }

  useEffect(() => {
    const stations = getStations();
    setStationLists(stations);
  }, []);

  const fromInputChangeHandler = (event) => {
    const enteredFromStation = fromInputRef.current.value;

    setEnteredStationDetails((prevValues) => ({
      ...prevValues,
      from: enteredFromStation,
    }));
  };

  useEffect(() => {
    const filterStations = stationLists.filter(
      (station) => station !== enteredStationDetails.from
    );
    setToStationLists(filterStations);
  }, [stationLists, enteredStationDetails]);

  const toInputChangeHandler = () => {
    const enteredToStation = toInputRef.current.value;

    setEnteredStationDetails((prevValues) => ({
      ...prevValues,
      to: enteredToStation,
    }));
  };

  const fetchTrainHandler = () => {
    const reftrainLists = getTrainsBetweenStations(
      enteredStationDetails.from,
      enteredStationDetails.to
    );
    console.log(reftrainLists);
    setTrainLists(reftrainLists);
  };

  return (
    <Fragment>
      <Card>
        <h2 className="centered">Select Stations</h2>
        <div className={classes.stations}>
          <div className={classes.stationoptions}>
            <label className={classes.label} htmlFor="from">
              FROM
            </label>
            <select
              id="from"
              name="fromStations"
              className={classes.stationList}
              ref={fromInputRef}
              onChange={fromInputChangeHandler}
            >
              <option selected>Select from the list</option>
              {stationLists.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.stationoptions}>
            <label className={classes.label} htmlFor="to">
              TO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <select
              name="toStations"
              id="to"
              className={classes.stationList}
              ref={toInputRef}
              onChange={toInputChangeHandler}
            >
              <option selected>Select from the list</option>
              {toStationLists.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className={classes.buttons} onClick={fetchTrainHandler}>
              Fetch Trains
            </button>
          </div>
        </div>
      </Card>
      {trainLists.length > 0 && <Trains trains={trainLists} stationDetails={enteredStationDetails} /> }
    </Fragment>
  );
}

export default TrainForm;
