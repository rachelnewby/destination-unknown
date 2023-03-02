const apiKey = require('./apikey');
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const headers = {
  'Origin': 'https://localhost:3000'
}

class FlightClient {
  loadFlights(numberOfTravellers, outboundDestination, inboundDestination, departureDate, returnDate){
    const url = `${corsAnywhereUrl}https://app.goflightlabs.com/search-best-flights?access_key=${apiKey}&adults=${numberOfTravellers}&origin=${outboundDestination}&destination=${inboundDestination}&departureDate=${departureDate}&returnDate=${returnDate}`;
    return fetch(url, {headers})
      .then((response) => response.json())
      .then((flights) => {
        return flights.data.buckets[1]
      })
      .catch((error) => {return error})
  }
}

module.exports = FlightClient;