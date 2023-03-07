import React from 'react';
import Rating from 'react-rating';
import './safety.css'

function SafetyRatings( { cityData } ) {
  const cityName = cityData.data.attributes.name;
  const safety = cityData.data.attributes.safety[`${cityName}`].value;
  const subText = cityData.data.attributes.safety[`${cityName}`].subText;
  const text = cityData.data.attributes.safety[`${cityName}`].text;

  return (
    <div className="ratings-div">
      <div className="safety-container">
        <h4 className="safety-heading">Safety:
          <span className="safety-hover-text">The safety rating is {text.toLowerCase()}, you should {subText.toLowerCase()}!</span>
        </h4>
        <Rating
          start={0}
          stop={5}
          step={1}
          readonly={true}
          initialRating={safety}
          fullSymbol={
            <img
              src={'/safetyIcon.png'}
              className='safety-full'
              width={30}
              height={30}
              alt=""
              style={{ marginRight: '1px' }}
            />
          }
          emptySymbol={
            <img
              src={'/emptyIcon.png'}
              className='safety-empty'
              width={30}
              height={30}
              alt=""
              style={{ marginRight: '1px' }}
            />
          }
        />
      </div>
    </div>
  );
}  

export default SafetyRatings;