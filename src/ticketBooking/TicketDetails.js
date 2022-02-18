import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';

import HighlightedTicket from './HighlightedTicket';
import AddPassenger from './AddPassenger';
import  { modalActions } from '../store/modal';
import PassengerLists from './PassengerLists';
import { getDistance, getTrainDetails } from '../AppData/stationLists';
import TicketBill from './TicketBill';


function TicketDetails() {
const [passengerList , setPassengerList] = useState([]);
const [distance, setDistance] =  useState('');
const [trainInfo, setTrainInfo] = useState('');

const dispatch = useDispatch();
const isModalActive = useSelector(state => state.modal.isModalActive);

const params = useParams();
const id = params.ticketid;

const location = useLocation();
const queryPrams = new URLSearchParams(location.search);

const boarding = queryPrams.get('from');
const destination = queryPrams.get('to');

useEffect(() => {
  const train = getTrainDetails(id);
  setTrainInfo(train);

  const totalDistance = getDistance(boarding,destination);
  setDistance(totalDistance);
}, [boarding, destination, id]);

const addPassengerHandler = () => {
    dispatch(modalActions.open())
}

const addPassengerToList = (passenger) => {
    setPassengerList(prevValue => [...prevValue,passenger]);
};

const removePassengerFromList = (passengerIndex) => {
  const updatedPassengerList = passengerList.filter((passenger, index) => index !== passengerIndex);
  setPassengerList(updatedPassengerList);
};

  return (
    <div>
      <HighlightedTicket id={id} boarding={boarding} destination={destination} />
        <button className='centered btn' onClick={addPassengerHandler}>Add Passenger</button>
        {isModalActive && <AddPassenger addPassenger={addPassengerToList} />}
        {passengerList.length > 0 && <PassengerLists passengers={passengerList} removePassengers={removePassengerFromList} />}
        {passengerList.length > 0 && <TicketBill fare={trainInfo.fare} distance={distance} totalPassengers={passengerList.length} />}

    </div>
  );

    
}

export default TicketDetails
