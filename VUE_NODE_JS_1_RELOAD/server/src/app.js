// Imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express(); const port = 8081
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `user ${req.body.email}`
  })
})

app.listen(port, () => {
  console.log(`BACKEND RUNNIG IN PORT ${port}`)
})
