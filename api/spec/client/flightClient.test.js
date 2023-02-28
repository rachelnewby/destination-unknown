const FlightClient = require('../../client/flightClient');
const  mockResponse = require('./mockFlightClientResponse')

require('jest-fetch-mock').enableMocks();

describe('FlightClient', () => {
  it('calls fetch and returns flight into form API', () => {
    const client = new FlightClient()
    fetch.mockResponseOnce(JSON.stringify(mockResponse))
    client.loadFlights().then((flights) => {
      // buckets[1] an array that refers the cheapest flights portion of the api response
      expect(flights).toEqual(mockResponse.data.buckets[1])
    })
  })

  it('returns an error if request is not fulfilled', () => {
    const client = new FlightClient()
    fetch.mockReject('Error')
    client.loadFlights().then((error) => {
      expect(error).toEqual('Error')
    })
  })
})