import React, { useState } from "react";
import Toggle from "react-toggle";
import FlightForm from "../form/form";
import Header from "../header/header";

import "./App.css";

function App() {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleButtonClick = () => {
    setSearchClicked(true);
  };

  const handleButtonClickFalse = () => {
    setSearchClicked(false);
  };

  if (searchClicked === false) {
    return (
      <div className="App">
        <Header className="app-header"/>
        
        <div
          className="firstform-wrapper"
          style={{
            display: "grid",
            padding: '75px',
          }}
        >
          <Toggle
          className="react-toggle"
          defaultChecked={searchClicked}
          onChange={handleButtonClick}
          icons={false}
        />
          <label className="button-label" htmlFor="second-city-select">
            Add Second City
          </label>
          <div className="firstform-wrapper" style={{ gridColumn: "1" }}>
            <FlightForm className="flightForm" id="firstCity" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header className="app-header"/>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
        </div>
        <div
          className="forms-wrapper"
          style={{
            display: "grid",
            gridTemplateColumns: searchClicked ? "1fr 1fr" : "1fr",
            padding: '75px',
          }}
        >
          <div
            className="form-wrapper"
            style={{ gridColumn: "1 / 1" }}
          >
            <Toggle
            className="react-toggle"
            defaultChecked={searchClicked}
            onChange={handleButtonClickFalse}
            icons={false}
          />
          <label className="button-label" htmlFor="second-city-select">Remove second city</label>
            <FlightForm className="flightForm" id="firstCity" />
          </div>

          <div
            className="form-wrapper"
            style={{ gridColumn: "2 / 2", marginTop: "38px", }}
          >
            <FlightForm className="flightForm" id="secondCity" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
