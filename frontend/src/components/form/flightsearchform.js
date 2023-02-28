import React, { useState } from 'react';

function FlightSearch() {
    const [formInput, setFormInput] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        adults: ''
    });

    //const handle submit, but not working yet.
    // this should be a call back function with like a event

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Origin:
                <input type='text' name='origin' />
            </label>
            <br />
            <label>
                destination:
                <input type='text' name='destination' />
            </label>
            <br />
            <label>
                departureDate:
                <input type='text' name='departureDate' />
            </label>
            <label>
                returnDate:
                <input type='text' name='returnDate' />
            </label>
            <br />
            <label>
                adults:
                <input type='text' name='adults' />
            </label>
            <br />
        </form>

    )

}
 