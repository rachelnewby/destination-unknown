const express = require('express');
const app = express();
const FlightClient = require('./client/flightClient');
const RoadgoatClient = require('./client/roadgoatClient');
const cors = require('cors');

app.use(cors());

const flightClient = new FlightClient();
const roadgoatClient = new RoadgoatClient();

console.log('Server is running');

app.get('/', async (req, res) => {
  const {travellers, outbound, inbound, departureDate, returnDate, city} = req.query;

  try {
    const [flights, cityData] = await Promise.all([
      flightClient.loadFlights(travellers, outbound, inbound, departureDate, returnDate),
      roadgoatClient.loadCity(city)
    ]);

    console.log('app.js flights', flights);
    console.log('app.js cityData', cityData);

    res.status(200).json({flights, city: cityData});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Something went wrong'});
  }
});

app.listen(4000);
