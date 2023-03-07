  import React from 'react';
  import './recommendations.css'; 

  function Recommendations({ cityData }) {
    const guide = cityData.data.attributes.getyourguide_url;
    const gevents = cityData.data.attributes.google_events_url;
    const hikes = cityData.data.attributes.alltrails_url;
    const cars = cityData.data.attributes.kayak_car_rental_url;
    console.log("cityData:", cityData);
    console.log("guide:", guide);
    console.log("gevents:", gevents);
    console.log("hikes:", hikes);
    console.log("cars:", cars);
  
    const handleClick = (url) => {
      if (url) {
        window.open(url, '_blank');
      }
    };  

    return (
      <div className="button-group">
        <h2 className="title">Recommendations</h2>
          <div className="button-wrapper">
              <button type="button" onClick={() => handleClick(guide)} className="button">
              <img src="/getyourguide.svg" alt="Get your guide icon" /> Guides
              </button>
              <button type="button" onClick={() => handleClick(cars)} className="button">
              <img src="/kayak.png" alt="Kayak icon" /> Kayak
              </button>
              <button type="button" onClick={() => handleClick(gevents)} className="button">
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