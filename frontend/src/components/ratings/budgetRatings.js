import React from 'react';
import Rating from 'react-rating';
import './ratings.css';


function BudgetRatings( { cityData } ) {
  const cityName = cityData.data.attributes.name;
  const budget = cityData.data.attributes.budget[`${cityName}`].value;
  const subText = cityData.data.attributes.budget[`${cityName}`].subText;
  const text = cityData.data.attributes.budget[`${cityName}`].text;

  return (
    <div className="ratings-div">
      <h3>Budget rating based on daily cost of lodging, food, and expenditure</h3>
      <p>The budget you need for {cityName} is {text.toLowerCase()}!</p>
      <div >
        <Rating
          start={0}
          stop={8}
          step={1}
          readonly={true}
          initialRating={budget}
          fullSymbol={
            <img
              src={'/budgetIcon.png'}
              className='budget-full'
              width={40}
              height={40}
              alt=""
            />
          }
          emptySymbol={
            <img
              src={'/emptyIcon.png'}
              width={40}
              height={40}
              alt=""
            />
          }
        />
      </div>
      <p>{subText}!</p>
    </div>
  );
}

export default BudgetRatings; 