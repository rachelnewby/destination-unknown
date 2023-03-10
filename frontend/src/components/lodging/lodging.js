import React from 'react';
import './lodging.css'; 
import Stack from 'react-bootstrap/Stack';

function Lodging({ cityData }) {
  const airbnb = cityData.data.attributes.airbnb_url;
  const kayak = cityData.data.attributes.kayak_lodgings_url;

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };  

  return (
    <div className="lodging-wrapper">
       <h2 className="title">Where to stay</h2>
      <div className="button-group" style={{  display: "flex", alignItems: "center",}}>
          <Stack direction="horizontal" gap={3} >
              <button type="button" onClick={() => handleClick(airbnb)} className="button">
              <img src="/airbnb.png" alt="Airbnb icon" />Airbnb
              </button>
              <button type="button" onClick={() => handleClick(kayak)} className="button">
              <img src="/kayak.png" alt="Kayak icon" />Kayak
              </button>
          </Stack>
      </div>
    </div>
  );
}

export default Lodging