import React from 'react';
import './lodging.css'; 

function Lodging({ cityData }) {
  const airbnb = cityData.data.airbnb_url;
  const kayak = cityData.data.kayak_lodgings_url;

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="button-group">
      <h2 className="title">Lodging</h2>
        <div className="button-wrapper">
            <button type="button" onClick={() => handleClick(airbnb)} className="button">
            <img src="/airbnb.png" alt="Airbnb icon" /> Airbnb
            </button>
            <button type="button" onClick={() => handleClick(kayak)} className="button">
            <img src="/kayak.png" alt="Kayak icon" /> Kayak
            </button>
        </div>
    </div>
  );
}

export default Lodging