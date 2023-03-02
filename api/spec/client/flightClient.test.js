const FlightClient = require('../../client/flightClient');
const mockResponse = require('./mockFlightClientResponse')

require('jest-fetch-mock').enableMocks();

describe('FlightClient', () => {
  it('calls fetch and returns flight into from API', () => {
    const client = new FlightClient()
    fetch.mockResponseOnce(JSON.stringify(mockResponse))
    const numberOfTravellers = 1;
    const outboundDestination = "MAD";
    const inboundDestination = "FCO";
    const departureDate = "2023-03-10";
    const returnDate = "2023-03-20";
    client.loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate).then((flights) => {
      // buckets[1] an array that refers the cheapest flights portion of the api response
      console.log(mockResponse.data.buckets[1])
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