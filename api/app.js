const express = require('express')
const app = express()
const FlightClient = require('./client/flightClient')
const cors = require('cors')

app.use(cors())

const flightClient = new FlightClient()
console.log('Server is running')
app.get('/', async (req, res) => {
  const {travellers, 
    outbound, 
    inbound, 
    departureDate, 
    returnDate} = req.query

  flights = await flightClient.loadFlights(travellers, outbound, inbound, departureDate, returnDate)
  console.log('app.js ', flights)
  res.status(200).json({flights})
})

app.listen(4000)