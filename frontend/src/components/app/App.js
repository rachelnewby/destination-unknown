import React, { useState } from "react";
import Toggle from "react-toggle";
import FlightForm from "../form/form";
import "./App.css";

function App() {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleButtonClick = () => {
    setSearchClicked(true);
  };

  const handleButtonClickFalse = () => {
    setSearchClicked(false);
  };

  return (
    <div className="App">
      <Toggle
        className="react-toggle"
        defaultChecked={searchClicked}
        onChange={searchClicked ? handleButtonClickFalse : handleButtonClick}
        icons={false}
      />
      <label className="button-label" htmlFor="second-city-select">
        {searchClicked ? "Remove Second City" : "Add Second City"}
      </label>
      <div
  className="forms-wrapper"
  style={{
    display: "grid",
    gridTemplateColumns: searchClicked ? "1fr 1fr" : "1fr",
  }}
>
  <div className="form-wrapper" style={{ gridColumn: "1 / 2" }}>
    <FlightForm id="firstCity" />
  </div>
  {searchClicked && (
    <div className="form-wrapper" style={{ gridColumn: "2 / 2" }}>
      <FlightForm id="secondCity" />
    </div>
  )}
  </div>
</div>
  );
}

export default App;
