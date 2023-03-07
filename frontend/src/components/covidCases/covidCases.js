import React from 'react';
import './covidCases.css';

function Cases({ cityData }) {
  const name = cityData.data.attributes.name;
  const country = name.split(", ")[1];
  const covidData = cityData.data.attributes.covid[country];
  const text = covidData.text

  return (
    <div className="covid-container">
      <h1><span className="covid-text">Covid  </span><span className={`circle ${text.toLowerCase()}`} /> <span className={text.toLowerCase()} title="Based on 7-day Covid Cases per 100k people in the country provided by Worldometer">{text}</span></h1>
    </div>
  );
}

export default Cases;
