import React from 'react';
import FlightClient from '../../../../api/client/flightClient'
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
    this.setState({ outboundDestination: event.target.value });
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
          <input className="form-control" type="text" value={outboundDestination} onChange={this.handleOutboundDestinationChange} />
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
          <input className="form-control" type="date" value={departureDate} onChange={this.handleDepartureDateChange} />
        </div>
        </div>
        <br />
        <div class="form__row">
        <div class="form__input">
        <label>Return date:</label>
          <input className="form-control" type="date" value={returnDate} onChange={this.handleReturnDateChange} />
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