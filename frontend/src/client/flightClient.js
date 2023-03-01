const apiKey = require('./apikey')

class FlightClient {
  loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate){
    return fetch(`https://app.goflightlabs.com/search-best-flights?access_key=${apiKey}&adults=${numberOfTravellers}&origin=${outboundDestination}&destination=${inboundDestination}&departureDate=${departureDate}&returnDate=${returnDate}`)
    .then((response) => response.json())
    // buckets[1] an array that refers to the cheapest flights portion of the api response
    .then((flights) => {return flights.data.buckets[1]})
    .catch((error) => {return error})
  }
}

module.exports = FlightClient;