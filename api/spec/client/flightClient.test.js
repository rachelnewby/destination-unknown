const FlightClient = require('../../client/flightClient');
const  mockResponse = require('./mockFlightClientResponse')

require('jest-fetch-mock').enableMocks();

describe('FlightClient', () => {
  it('calls fetch and returns flight into form API', () => {
    const client = new FlightClient()
    fetch.mockResponseOnce(JSON.stringify(mockResponse))
    client.loadFlights().then((flights) => {
      expect(flights).toEqual(mockResponse)
    })
  })
})