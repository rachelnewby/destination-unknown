import React from 'react';
import './recommendations.css'; 

function Recommendations({ cityData }) {
    const guide = cityData.data.getyourguide_url;
    const gevents =  cityData.data.google_events_url;
    const hikes = cityData.data.alltrails_url;
    const cars = cityData.data.kayak_car_rental_url;

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="button-group">
      <h2 className="title">Recommendations</h2>
        <div className="button-wrapper">
            <button type="button" onClick={() => handleClick(guide)} className="button">
            <img src="/getyourguide.svg" alt="Get your guide icon" /> Guides
            </button>
            <button type="button" onClick={() => handleClick(gevents)} className="button">
            <img src="/kayak.png" alt="Kayak icon" /> Kayak
            </button>
            <button type="button" onClick={() => handleClick(cars)} className="button">
            <img src="/google.png" alt="Google icon" /> Events
            </button>
            <button type="button" onClick={() => handleClick(hikes)} className="button">
            <img src="/alltrails.png" alt="All trails icon" /> All trails
            </button>
        </div>
    </div>
  );
}

export default Recommendations