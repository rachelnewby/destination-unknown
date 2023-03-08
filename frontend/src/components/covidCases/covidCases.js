import React from 'react';
import './covidCases.css';

function Cases({ cityData }) {
  const name = cityData.data.attributes.name;
  const country = name.split(", ")[1];
  const covidData = cityData.data.attributes.covid[country];
  const text = covidData.text

  return (
    <div className="covid-div">
      <div className="covid-container">
        <h4 className="covid-heading">Covid:
         <span className={`circle ${text.toLowerCase()}`} /> <span className="covid-hover-text"> Based on 7-day Covid Cases per 100k people in the country</span><span className="covid-text">{text}</span>
        </h4>
      </div>
    </div>
  );
}

export default Cases;