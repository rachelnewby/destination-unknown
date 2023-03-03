const express = require('express')
const app = express()
const FlightClient = require('./client/flightClient')

const flightClient = new FlightClient()

app.get('/', (req, res) => {
  const {travellers, 
    outbound, 
    inbound, 
    departureDate, 
    returnDate} = req.query

  flights = flightClient.loadFlights(travellers, outbound, inbound, departureDate, returnDate)
  res.json(flights)
})

app.listen(4000)