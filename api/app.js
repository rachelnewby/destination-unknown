const express = require('express')
const app = express()
const FlightClient = require('./client/flightClient')

const flightClient = new FlightClient()

app.get('/', async (req, res) => {
  const {travellers, 
    outbound, 
    inbound, 
    departureDate, 
    returnDate} = req.query

  flights = await flightClient.loadFlights(travellers, outbound, inbound, departureDate, returnDate)
  console.log('app.js ', flights)
  res.json(flights)
})

app.listen(4000)