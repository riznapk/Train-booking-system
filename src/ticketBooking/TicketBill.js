import React, {Fragment} from 'react';
import { useState } from 'react';

import classes from './TicketBill.module.css';
import PaymentSuccessfull from './PaymentSuccessfull';

function TicketBill(props) {
    const [paymentSuccessfull, setPaymentSuccessfull] = useState(false);

    const totalBillAmount = props.fare * props.totalPassengers * props.distance;

    const paymentHandler = () => {
        setPaymentSuccessfull(true);
    }; 

    return (
        <Fragment>
        {paymentSuccessfull && <PaymentSuccessfull />}
        <div className={classes.item}>
            <figure>
                <br />
                <figcaption>Total Passengers : {props.totalPassengers}</figcaption>
                <br />
                <blockquote>
                    <p>
                        Total Bill Amount: <strong> ₹{totalBillAmount}</strong>
                    </p>
                </blockquote>
            </figure>
            <button className={`btn ${classes.pay}`} onClick={paymentHandler}>
                Pay & Book
            </button>
        </div>
    </Fragment>
      
    )
}

export default TicketBill
