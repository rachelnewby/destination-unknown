import React, { useState, useEffect } from "react";
import PriceChart from "../priceChart/priceChart";
import ErrorMessage from "../errorMessage/errorMessage";
import BudgetRatings from "../ratings/budgetRatings";
import SafetyRatings from "../safetyRatings/safetyRatings";
import Lodging from "../lodging/lodging";
import Recommendations from "../recommendations/recommendations";
import Cases from "../covidCases/covidCases";
import KnownFor from "../knownFor/knownFor";
import LoadingBar from "../loadingBar/loadingBar";
import Gallery from "../gallery/gallery";
import Heading from "../heading/heading";
import "./form.css";

const inbound = [
  { name: "paris-france", airportcode: "CDG", place: "Paris" },
  { name: "bologna-italy", airportcode: "BLQ", place: "Bologna" },
  { name: "rome-italy", airportcode: "FCO", place: "Rome" },
  { name: "barcelona-spain", airportcode: "BCN", place: "Barcelona" },
  { name: "ibiza-spain", airportcode: "IBZ", place: "Ibiza" },
  { name: "lisbon-portugal", airportcode: "LIS", place: "Lisbon" },
  { name: "porto-portugal", airportcode: "OPO", place: "Porto" },
  { name: "copenhagen-denmark", airportcode: "CPH", place: "Copenhagen" },
  { name: "budapest-hungary", airportcode: "BUD", place: "Budapest" },
  { name: "prague-czech-republic", airportcode: "PRG", place: "Prague" },
  { name: "athens-greece", airportcode: "ASH", place: "Athens" },
  { name: "krakow-poland", airportcode: "KRK", place: "Krakow" },
];

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
  const [spinner, setSpinner] = useState(false);
  const formattedDepartureDate = `${departureDate
    .split("/")
    .reverse()
    .join("-")}`;
  const formattedReturnDate = `${returnDate.split("/").reverse().join("-")}`;

  useEffect(() => {
    console.log("Flights updated:", flights);
  }, [flights]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSpinner(true);

    const selectedInbound = inbound.find(
      (option) => option.airportcode === inboundDestination
    );
    const url = `http://localhost:4000/?city=${selectedInbound.name}&travellers=${numberOfTravellers}&outbound=${outboundDestination}&inbound=${selectedInbound.airportcode}&departureDate=${formattedDepartureDate}&returnDate=${formattedReturnDate}`;

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
          setFlights(data.flights);
          setCity(data.city);
          setSpinner(false);
          setError(null);
        } else {
          setSpinner(false);
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
    <main className="whole-background">
      <div class="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-background">
            <div class="form__col">
              <label>From</label>
              <select
                className="form-control"
                value={outboundDestination}
                onChange={(event) => setOutboundDestination(event.target.value)}
              >
                <option value="">City</option>
                {outbound.map((option) => (
                  <option key={option.airportcode} value={option.airportcode}>
                    {option.place}
                  </option>
                ))}
              </select>
            </div>
            <div class="form__col">
              <label>To</label>
              <select
                className="form-control"
                value={inboundDestination}
                onChange={(event) => setInboundDestination(event.target.value)}
              >
                <option value="">City</option>
                {inbound.map((option) => (
                  <option key={option.airportcode} value={option.airportcode}>
                    {option.place}
                  </option>
                ))}
              </select>
            </div>
            <div class="form__row form__row--flex">
              <div class="form__col">
                <label>Depart:</label>
                <input
                  className="form-control"
                  type="date"
                  value={departureDate}
                  onChange={(event) => setDepartureDate(event.target.value)}
                />
              </div>
              <div class="form__col">
                <label>Return:</label>
                <input
                  className="form-control"
                  type="date"
                  value={returnDate}
                  onChange={(event) => setReturnDate(event.target.value)}
                />
              </div>
            </div>
            <div class="form__row form__row--flex">
              <div class="form__col">
                <label>Travellers:</label>
                <input
                  className="form-control"
                  type="text"
                  value={numberOfTravellers}
                  onChange={(event) =>
                    setNumberofTravellers(event.target.value)
                  }
                />
              </div>
              <div class="form__col">
                <button type="submit">Search flights</button>
              </div>
            </div>
          </div>
        </form>
        <div className="components-wrapper">
          {spinner && <LoadingBar type={"bubbles"} color={"#F9F1F0"} />}
          <div className="heading">{city && <Heading cityData={city} />}</div>
          <div className="gallery">{city && <Gallery goatData={city} />}</div>
          <div className="PriceChart">
            {flights && <PriceChart chartData={flights} />}
          </div>
          <div className="KnownFor">{city && <KnownFor goatData={city} />}</div>
          <div className="Cases">{city && <Cases cityData={city} />}</div>
          <div className="budgetrating">
            {city && <BudgetRatings cityData={city} />}
          </div>
          <div className="safetyrating">
            {city && <SafetyRatings cityData={city} />}
          </div>
          <div className="recommendations">
            {city && <Recommendations cityData={city} />}
          </div>
          <div className="lodging">{city && <Lodging cityData={city} />}</div>
        </div>
      </div>
    </main>
  );
}

export default FlightForm;
