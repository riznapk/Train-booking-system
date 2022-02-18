import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import Modal from "../UI/Modal";
import classes from "./AddPassenger.module.css";
import { modalActions } from "../store/modal";

function AddPassenger(props) {
  const passengerAgeInputRef = useRef();
  const passengerNameInputRef = useRef();

  const dispatch = useDispatch();

  const addPassengerToListHandler = (event) => {
    event.preventDefault();

    const name = passengerNameInputRef.current.value;
    const age = passengerAgeInputRef.current.value;

    props.addPassenger({name, age});
    dispatch(modalActions.close());
  };

  const handleCancel = () => {
    dispatch(modalActions.close());
  };

  return (
    <Modal>
      <form onSubmit={addPassengerToListHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Passenger Name</label>
          <input
            type="text"
            id="name"
            ref={passengerNameInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="age">Passenger Age</label>
          <input
            type="number"
            id="age"
            min='1'
            max='150'
            ref={passengerAgeInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Passenger</button>&nbsp;&nbsp;&nbsp;
          <button className="btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddPassenger;
