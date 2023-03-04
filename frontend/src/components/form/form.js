import React, { useState, useEffect } from 'react';
import './form.css';
import PriceChart from '../priceChart/priceChart';
import ErrorMessage from '../errorMessage/errorMessage';

const outbound = [
  { airportcode: 'MAD', name: 'madrid-spain' }
];

function FlightForm() {
  const [numberOfTravellers, setNumberofTravellers] = useState('');
  const [outboundDestination, setOutboundDestination] = useState('');
  const [inboundDestination, setInboundDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Flights updated:', flights);
  }, [flights]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedOutbound = outbound.find((option) => option.airportcode === outboundDestination);
    const url = `http://localhost:4000/?city=${selectedOutbound.name}&travellers=${numberOfTravellers}&outbound=${selectedOutbound.airportcode}&inbound=${inboundDestination}&departureDate=${departureDate}&returnDate=${returnDate}`;
    console.log(url);

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Sorry, an error has occurred. Please try again.');
        }
        return response.json();
      })
      .then(data => {
          console.log(data);
          setFlights(data.flights);
          console.log('flights', data);
          setCity(data.city);
          console.log('city', data.city)
        })
      .catch(error => {
        console.log('Error:', error);
        setError(`${error}`);
      });
  }
    return (
      <main class="content">
          <h3 class="panel__title">Find a Flight</h3>
        <form onSubmit={handleSubmit}>
          <div class="form__row">
          <div class="form__input">
          <label>Outbound destination:</label>
              <select className="form-control" value={outboundDestination} onChange={(event) => setOutboundDestination(event.target.value)}>
                <option value="">Select destination</option>
                {outbound.map((option) => (
                  <option key={option.airportcode} value={option.airportcode}>{option.name}</option>
                ))}
              </select>
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
        {flights && <PriceChart chartData={flights} />}
        {/* {city && <div> city data is that = {city}</div>} */}
        {error && <ErrorMessage error={error}/>}
      </main>
    );
  };

  export default FlightForm;
