const apiKey = require('./apikey');

class FlightClient {
  loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate){
    const url = `https://app.goflightlabs.com/search-best-flights?access_key=${apiKey}&adults=${numberOfTravellers}&origin=${outboundDestination}&destination=${inboundDestination}&departureDate=${departureDate}&returnDate=${returnDate}`;
    return fetch(url)
      .then((response) => response.json())
      .then((flights) => {
        console.log('flight client', flights)
        return flights.data.buckets[1]
      })
      .catch((error) => {return error})
  }
}

module.exports = FlightClient;