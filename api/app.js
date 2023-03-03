const express = require('express')
const app = express()
const router = app.router
const client = require('./client/flightClient')

router.get('/', (req, res) => {
  
})

app.listen(3000)