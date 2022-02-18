import React from "react";
import { Link } from "react-router-dom";

import classes from "./TrainItem.module.css";

function TrainItem({ id, name, fare, boarding, destination }) {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{`${id}|${name}`}</p>
        </blockquote>
      </figure>
      <Link className="btn" to={`/ticketbooking/${id}?from=${boarding}&to=${destination}`}>
        Book Ticket
      </Link>
    </li>
  );
}

export default TrainItem;
