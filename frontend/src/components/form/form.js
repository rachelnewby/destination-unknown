import React, { useState, useEffect } from 'react';
import './form.css';
import PriceChart from '../priceChart/priceChart';
import ErrorMessage from '../errorMessage/errorMessage';
import BudgetRatings from '../ratings/budgetRatings';
import SafetyRatings from '../safetyRatings/safetyRatings';
import Lodging from '../lodging/lodging';
import Recommendations from '../recommendations/recommendations';
import Cases from '../covidCases/covidCases';
import Image from '../image/image';
import KnownFor from '../knownFor/knownFor';

const inbound = [
  {name: "paris-france", airportcode: "CDG", place: 'Paris'},
  {name: "bologna-italy", airportcode: "BLQ", place: 'Bologna'},
  {name: "rome-italy", airportcode: "FCO", place: 'Rome'},
  {name: "barcelona-spain", airportcode: "BCN", place: 'Barcelona'},
  {name: "ibiza-spain", airportcode: "IBZ", place: 'Ibiza'},
  {name: "lisbon-portugal", airportcode: "LIS", place: 'Lisbon'},
  {name: "porto-portugal", airportcode: "OPO", place: 'Porto'},
  {name: "copenhagen-denmark", airportcode: "CPH", place: 'Copenhagen'},
  {name: "budapest-hungary", airportcode: "BUD", place: 'Budapest'},  
  {name: "prague-czech-republic", airportcode: "PRG", place: 'Prague'},
  {name: "athens-greece", airportcode: "ASH", place: 'Athens'},
  {name: "krakow-poland", airportcode: "KRK", place: 'Krakow'}
]

const outbound = [
  { place: "Heathrow", airportcode: "LHR" },
  { place: "Manchester", airportcode: "MAN" },
  { place: "Cardiff", airportcode: "CWL" },
  { place: "Bristol", airportcode: "BRS" },
  { place: "Edinburgh", airportcode: "EDI" },
  { place: "Dublin", airportcode: "DUB" },
];


function FlightForm() {
  const [numberOfTravellers, setNumberofTravellers] = useState("");
  const [outboundDestination, setOutboundDestination] = useState("");
  const [inboundDestination, setInboundDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const formattedDepartureDate = `${departureDate.split('/').reverse().join('-')}`;
  const formattedReturnDate = `${returnDate.split('/').reverse().join('-')}`;

  useEffect(() => {
    console.log("Flights updated:", flights);
  }, [flights]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedInbound = inbound.find(
      (option) => option.airportcode === inboundDestination
    );
    const url = `http://localhost:4000/?city=${selectedInbound.name}&travellers=${numberOfTravellers}&outbound=${outboundDestination}&inbound=${selectedInbound.airportcode}&departureDate=${formattedDepartureDate}&returnDate=${formattedReturnDate}`;
    console.log(url);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sorry, an error has occurred. Please try again.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.flights.items && data.flights.items.length > 0) {
          console.log(data);
          setFlights(data.flights);
          console.log("flights", data);
          setCity(data.city);
          console.log("city", data.city);
          setError(null);
        } else {
          throw new Error(
            "Sorry, there are no flights matching your request. Please try again."
          );
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setError(`${error}`);
      });
  };
  return (
    <main class="content">
      <h3 class="panel__title">Find a Flight</h3>
      <form onSubmit={handleSubmit}>
        <div class="form__row">
          <div class="form__input">
            <div class="form__row">
              <div class="form__input">
                <label>Outbound destination:</label>
                <select
                  className="form-control"
                  value={outboundDestination}
                  onChange={(event) =>
                    setOutboundDestination(event.target.value)
                  }
                >
                  <option value="">Select destination</option>
                  {outbound.map((option) => (
                    <option key={option.airportcode} value={option.airportcode}>
                      {option.place}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="form__row">
          <div class="form__input">
            <label>Inbound destination:</label>
            <select
              className="form-control"
              value={inboundDestination}
              onChange={(event) => setInboundDestination(event.target.value)}
            >
              <option value="">Select destination</option>
              {inbound.map((option) => (
                <option key={option.airportcode} value={option.airportcode}>
                  {option.place}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div class="form__row">
          <div class="form__input">
            <label>Departure date:</label>
            <input
              className="form-control"
              type="date"
              value={departureDate}
              onChange={(event) => setDepartureDate(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form__row">
          <div class="form__input">
            <label>Return date:</label>
            <input
              className="form-control"
              type="date"
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form__row">
          <div class="form__input">
            <label>Number of travellers:</label>
            <input
              className="form-control"
              type="text"
              value={numberOfTravellers}
              onChange={(event) => setNumberofTravellers(event.target.value)}
            />
          </div>
        </div>
          <br />
          <button type="submit">Search flights</button>
        </form>
        {flights && <PriceChart chartData={flights} />}
        {error && <ErrorMessage error={error}/>}
        {city && <BudgetRatings cityData={city} />}
        {city && <SafetyRatings cityData={city} />}
        {city && <KnownFor goatData={city} />}
        {city && <Recommendations cityData={city} />}
        {city && <Lodging cityData={city} />}
        {city && <Cases cityData={city} />}
        {city && <Image goatData={city} />}
      </main>
    );
  };


  export default FlightForm;
