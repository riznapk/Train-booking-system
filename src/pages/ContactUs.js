import React from "react";

import Card from "../UI/Card";

function ContactUs() {
  return (
    <Card>
      <p>
        <strong>Customer Care Numbers : </strong> 0755-6610661, 0755-4090600
        (Language: Hindi and English)..
      </p>
      <p>
        <strong>
          For Railway tickets booked through IRCTC <br />
          General Information
        </strong>
      </p>
      <p>
        <strong>I-tickets/e-tickets : </strong>
        <a href="mailto:care@irctc.co.in">care@irctc.co.in</a>
        <br />
        <strong>For Cancellation E-tickets : </strong>
        <a href="etickets@irctc.co.in">etickets@irctc.co.in</a>
        <br />
        <strong> For IRCTC iMudra Prepaid Wallet & Card : </strong>
        <a href="etickets@irctc.co.in">imudracare@irctc.co.in</a>
      </p>
      <p>
        For IRCTC SBI Card users who do not receive the card within 01 month
        from the date of application kindly call on the Railway SBI Card
        Helpline nos. at 0124-39021212 or 18001801295 (if calling from BSNL/MTNL
        line) or send email to <a href="customercare@sbicard.com">customercare@sbicard.com</a>. For other queries on
        your IRCTC SBI card account, kindly email at <a href='loyaltyprogram@irctc.co.in'>loyaltyprogram@irctc.co.in</a>
      </p>
      <p>
        <strong>
          Registered Office / Corporate Office
          <br />
          Indian Railway Catering and Tourism Corporation Ltd.,
          <br />
          B-148, 11th Floor, Statesman House,
          <br />
          Barakhamba Road, New Delhi 110001
        </strong>
      </p>
    </Card>
  );
}

export default ContactUs;
