import React from 'react';

function Ratings( { cityData } ) {
  const cityName = cityData.data.attributes.name;
  const budget = cityData.data.attributes.budget[`${cityName}`].value;

  return (
    <div className="ratings-div">
      <p>City name is: {cityName}</p>
      <p>Budget is: {budget}</p>
    </div>
  )
}

export default Ratings; 