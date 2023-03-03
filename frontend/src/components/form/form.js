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

  const outboundOptions = [
    "London Heatrow-LHR",
    "Manchester-MAN",
    "Liverpool-LPL",
    "Cardiff-CWL",
    "Bristol-BRS",
    "Edinburgh-EDI",
    "Dublin-DUB"
  ]
  const inboundOptions = [
    "Paris-CDG",
    "Bologna-BLQ",
    "Rome-FCO",
    "Split-SPU",
    "Barcelona-BCN",
    "Ibiza-IBZ",
    "Lisbon-LIS",
    "Porto-OPO",
    "Copenhagen-CPH",
    "Budapest-BUD",
    "Prague-PRG",
    "Athens-ASH",
    "Krakow-KRK"
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
          <select>
            <option value="London-LHR">London Heathrow</option>
            <option value="Manchester-MAN">Manchester</option>
            <option value="Liverpool-LPL">Liverpool</option>
            <option value="Cardiff-CWL">Cardiff</option>
            <option value="Bristol-BRS">Bristol</option>
            <option value="Edinburgh-EDI">Edinburgh</option>
            <option value="Dublin-DUB">Dublin</option>
          </select>
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Inbound destination:</label>
        <select>
          <option value="Paris-CDG">Paris</option>
          <option value="Bologna-BLQ">Bologna</option>
          <option value="Rome-FCO">Rome</option>
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
