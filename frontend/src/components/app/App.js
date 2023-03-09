import React, { useState } from "react";
import Toggle from "react-toggle";
import FlightForm from "../form/form";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../hero/hero"

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
    <div>
      <Header />
      <Hero />
      <div className="App">
        <Toggle
          className="react-toggle"
          defaultChecked={searchClicked}
          onChange={handleButtonClick}
          icons={false}
          style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, backgroundColor: 'darkgray' }}
        />
        <div
          className="firstform-wrapper"
          style={{
            display: "grid",
          }}
        >
          <label className="button-label" htmlFor="second-city-select">
            Add Second City
          </label>
          <div className="firstform-wrapper" style={{ gridColumn: "1", marginTop: "75px", }}>
            <FlightForm className="flightForm" id="firstCity" />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    );
  } else {
    return (
      <div>
        <Header />
      <div className="App">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Toggle
            className="react-toggle"
            defaultChecked={searchClicked}
            onChange={handleButtonClickFalse}
            icons={false}
            style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, backgroundColor: 'darkgray' }}
          />
          <label className="button-label" htmlFor="second-city-select"></label>
        </div>
        <div
          className="forms-wrapper"
          style={{
            display: "grid",
            gridTemplateColumns: searchClicked ? "1fr 1fr" : "1fr",
          }}
        >
          <div
            className="form-wrapper"
            style={{ gridColumn: "1 / 1", marginTop: "75px" }}
          >
            <FlightForm className="flightForm" id="firstCity" />
          </div>
          <div
            className="form-wrapper"
            style={{ gridColumn: "2 / 2", marginTop: "75px", }}
          >
            <FlightForm className="flightForm" id="secondCity" />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;