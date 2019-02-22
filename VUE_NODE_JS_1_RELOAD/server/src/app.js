// Imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// Squelize
const { sequelize } = require('./models')
// Configuration
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.post('/register', (req, res) => {
//   res.send({
//     message: `user ${req.body.email}`
//   })
// })

/**
 *
 * Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
 *  A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
 */
require('./passport')

require('./config/routes')(app)

// Sync with sequelize
sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port, () => {
      console.log(`🚀 Server connected to port: '${config.port}'🚀`)
    })
  })

// app.listen(port, () => {
//   console.log(`BACKEND RUNNIG IN PORT ${port}`)
// })
