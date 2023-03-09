import React from 'react';

function Heading( { cityData } ) {
    const cityName = cityData.data.attributes.name;
    return (
        <div className='heading-container'>
            <h3>Details of your trip to: {cityName}</h3>
        </div>
    )
}
export default Heading;