import React from 'react';
import FlightClient from './flightClient';
import airportCodes from 'airport-codes';
import './form.css';

class FlightForm extends React.Component {
  state = {
    numberOfTravellers: '',
    outboundDestination: '',
    inboundDestination: '',
    departureDate: '',
    returnDate: ''
  }

  handleNumberOfTravellersChange = (event) => {
    this.setState({ numberOfTravellers: event.target.value });
  }

  handleOutboundDestinationChange = (event) => {
    const { value } = event.target;
    const matches = airportCodes({ name: value });
    const airportCode = matches[0] ? matches[0].iata : '';
    this.setState({ outboundDestination: airportCode });
    // this.setState({ outboundDestination: event.target.value });
  }

  handleInboundDestinationChange = (event) => {
    this.setState({ inboundDestination: event.target.value });
  }

  handleDepartureDateChange = (event) => {
    this.setState({ departureDate: event.target.value });
  }

  handleReturnDateChange = (event) => {
    this.setState({ returnDate: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate } = this.state;
    FlightClient.loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate)
      .then((flights) => {
        console.log('API response:', flights);
        // handle the API response
      })
      .catch((error) => {
        // handle the error
      });
  }

  render() {
    const { numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate } = this.state;
    return (
    <main class="content">
        <h3 class="panel__title">Find a Flight</h3>
      <form onSubmit={this.handleSubmit}>
        <div class="form__row">
        <div class="form__input">
        <label>
          Outbound destination:
          </label>
          <input className="form-control" type="text" value={outboundDestination} onChange={this.handleOutboundDestinationChange} list="outbound-destinations"/>
            <datalist id="outbound-destinations">
              {airportCodes().map((airport) => (
                <option key={airport.iata} value={`${airport.name}, ${airport.countryName}`} />
              ))}
            </datalist>
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Inbound destination:</label>
          <input className="form-control" type="text" value={inboundDestination} onChange={this.handleInboundDestinationChange} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Departure date:</label>
          <input className="form-control" type="text" placeholder="YYYY-MM-DD" value={departureDate} onChange={this.handleDepartureDateChange} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Return date:</label>
          <input className="form-control" type="text" placeholder="YYYY-MM-DD" value={returnDate} onChange={this.handleReturnDateChange} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>
        Number of travellers:
        <select value={numberOfTravellers} onChange={this.handleNumberOfTravellersChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
        </select>
        </label>
        </div>
        </div>
        <br />
        <button type="submit">Search flights</button>
      </form>
    </main>
    );
  }
}

export default FlightForm;