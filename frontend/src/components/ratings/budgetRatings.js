import React from 'react';
import Rating from 'react-rating';
import './ratings.css';

function BudgetRatings( { cityData } ) {
  const cityName = cityData.data.attributes.name;

  if (!cityData.data.attributes.budget[`${cityName}`]) {
    return (
      <div className="error-message">
        No budget rating data available for this city.
      </div>
    )
  }

  const budget = cityData.data.attributes.budget[`${cityName}`].value;
  const subText = cityData.data.attributes.budget[`${cityName}`].subText;
  const text = cityData.data.attributes.budget[`${cityName}`].text;

  return (
    <div className="ratings-div">
      <div className="budget-container">
        <h4 className="budget-heading">Budget:
          <span className="budget-hover-text">
                  The budget you need for {cityName} is {text.toLowerCase()}!</span>
        </h4>
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
              width={20}
              height={20}
              alt=""
              style={{ marginRight: '1px' }}
            />
          }
          emptySymbol={
            <img
              src={'/emptyIcon.png'}
              width={20}
              height={20}
              alt=""
              style={{ marginRight: '1px' }}
            />
          }
        />
      </div>
    </div>
  );
}

export default BudgetRatings;