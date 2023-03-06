import React from 'react';

function Ratings( { cityData } ) {
  const cityName = cityData.data.attributes.name;
  const safety = cityData.data.attributes.safety[`${cityName}`].value;
  const subText = cityData.data.attributes.safety[`${cityName}`].subText;

  return (
    <div className="ratings-div">
      <p>City name is: {cityName}</p>
      <p>Safety is: {safety}</p>
      <p>Subetext is: {subText}</p>
    </div>
  )
}

export default Ratings; 