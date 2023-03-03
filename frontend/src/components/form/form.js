import React, { useState, useEffect } from 'react';
import FlightClient from './flightClient';
import './form.css';
import PriceChart from '../priceChart/priceChart';

function FlightForm() {
  const [numberOfTravellers, setNumberofTravellers] = useState('');
  const [outboundDestination, setOutboundDestination] = useState('');
  const [inboundDestination, setInboundDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState(null);

  useEffect(() => {
    console.log('Flights updated:', flights);
  }, [flights]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const flightClient = new FlightClient();
    flightClient.loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate)
      .then((flights) => {
        setFlights(flights);
        console.log(flights)
      })
      .catch((error) => {
      });
  };

  const inboundOption = [
    {name: "Paris", code: "CDG"},
    {name: "Bologna", code: "BLQ"},
    {name: "Rome", code: "FCO"},
    {name: "Split", code: "SPU"},
    {name: "Barcelona", code: "BCN"},
    {name: "Ibiza", code: "IBZ"},
    {name: "Lisbon", code: "LIS"},
    {name: "Porto", code: "OPO"},
    {name: "Copenhagen", code: "CPH"},
    {name: "Budapest", code: "BUD"},
    {name: "Prague", code: "PRG"},
    {name: "Athens", code: "ASH"},
    {name: "Krakow", code: "KRK"}
  ]
  const outboundOption = [
    {name: "London", code: "LHR"},
    {name: "Manchester", code: "MAN"},
    {name: "Cardiff", code: "CWL"},
    {name: "Bristol", code: "BRS"},
    {name: "Edinburgh", code: "EDI"},
    {name: "Dublin", code: "DUB"}
  ]

  return (
    <main class="content">
        <h3 class="panel__title">Find a Flight</h3>
      <form onSubmit={handleSubmit}>
        <div class="form__row">
        <div class="form__input">
        <label>
          Outbound destination:
          </label>
          <select className="form-control" value={outboundDestination} onChange={(event) => setOutboundDestination(event.target.value)}>
            <option value="">Select destination</option>
            {outboundOption.map((option) => (
              <option key={option.code} value={option.code}>{option.name}</option>
            ))}
          </select>
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Inbound destination:</label>
        <select className="form-control" value={inboundDestination} onChange={(event) => setInboundDestination(event.target.value)}>
            <option value="">Select destination</option>
            {inboundOption.map((option) => (
              <option key={option.code} value={option.code}>{option.name}</option>
            ))}
          </select>
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
      {flights && <PriceChart chartData={flights} />}
    </main>
  );
};

export default FlightForm;
