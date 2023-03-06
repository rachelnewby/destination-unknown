// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Toggle from "react-toggle";
import FlightForm from "../form/form";

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
        <Toggle
          className="react-toggle"
          defaultChecked={searchClicked}
          onChange={handleButtonClick}
          icons={false}
        />
        <label className="button-label" htmlFor="second-city-select">
          Add Second City
        </label>
        <FlightForm />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Toggle
          className="react-toggle"
          defaultChecked={searchClicked}
          onChange={handleButtonClickFalse}
          icons={false}
        />
        <FlightForm id="firstCity" />
        <FlightForm id="secondCity" />
        <label className="button-label" htmlFor="second-city-select">
          Remove Second City
        </label>
      </div>
    );
  }
}

export default App;
