import React, { useState } from 'react';
import FlightClient from './flightClient';
import './form.css';

// class FlightForm extends React.Component {
//   state = {
//     numberOfTravellers: '',
//     outboundDestination: '',
//     inboundDestination: '',
//     departureDate: '',
//     returnDate: ''
//   }

function FlightForm() {
  const [numberOfTravellers, setNumberofTravellers] = useState('');
  const [outboundDestination, setOutboundDestination] = useState('');
  const [inboundDestination, setInboundDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("number of travellers" + numberOfTravellers)
    console.log("outboundDestination" + outboundDestination)
    console.log("inbdoundDestination" + inboundDestination)
    console.log("departure Date" + departureDate)
    console.log("return Date" + returnDate)
  };

  return (
    <main class="content">
        <h3 class="panel__title">Find a Flight</h3>
      <form onSubmit={handleSubmit}>
        <div class="form__row">
        <div class="form__input">
        <label>
          Outbound destination:
          </label>
          <input className="form-control" type="text" value={outboundDestination} onChange={(event) => setOutboundDestination(event.target.value)} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Inbound destination:</label>
          <input className="form-control" type="text" value={inboundDestination} onChange={(event) => setInboundDestination(event.target.value)} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Departure date:</label>
          <input className="form-control" type="text" placeholder="YYYY-MM-DD" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Return date:</label>
          <input className="form-control" type="text" placeholder="YYYY-MM-DD" value={returnDate} onChange={(event) => setReturnDate(event.target.value)} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>
        Number of travellers:
          </label>
          <input className="form-control" type="text" value={numberOfTravellers} onChange={(event) => setNumberofTravellers(event.target.value)} />
        </div>
        </div>
        <br />
        <button type="submit">Search flights</button>
      </form>
    </main>
  );
};

export default FlightForm;
