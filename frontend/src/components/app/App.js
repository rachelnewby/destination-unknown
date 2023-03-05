// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import FlightForm from "../form/form";

function App() {
  const [searchClicked, setSearchClicked] = useState(false);

  const handleButtonClick = () => {
    setSearchClicked(true);
  };

  if (searchClicked === false) {
    return (
      <div className="App">
        <FlightForm onButtonClick={handleButtonClick} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <FlightForm id="firstCity" onButtonClick={handleButtonClick} />
        <FlightForm id="secondCity" onButtonClick={handleButtonClick} />
      </div>
    );
  }
}

export default App;
