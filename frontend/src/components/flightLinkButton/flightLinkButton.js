import React from "react";
import "./flightLinkButton.css";


function FlightLinkButton ( { chartData }) {
  const flightOne = chartData.items[0].deeplink
  const flightTwo = chartData.items[1].deeplink
  const flightThree = chartData.items[2].deeplink

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };  

  return (
    <div className="flight-group">
      <h2 className="title">Book now!</h2>
        <div className="button-wrapper">
          <button type="button" onClick={() => handleClick(flightOne)} className="button">
          <img src="/skyscannerLogo.png" alt="Skyscanner logo" /> Flight option 1
          </button>
          <button type="button" onClick={() => handleClick(flightTwo)} className="button">
          <img src="/skyscannerLogo.png" alt="Skyscanner logo" /> Flight option 2
          </button>
          <button type="button" onClick={() => handleClick(flightThree)} className="button">
          <img src="/skyscannerLogo.png" alt="Skyscanner logo" /> Flight option 3
          </button>
        </div>
    </div>
  )
}

export default FlightLinkButton;
