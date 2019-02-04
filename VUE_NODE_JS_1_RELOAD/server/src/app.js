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

require('./config/routes')(app)

// Sync with sequelize
sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port, () => {
      console.log(`BACKEND RUNNIG IN PORT ${config.port}`)
    })
  })

// app.listen(port, () => {
//   console.log(`BACKEND RUNNIG IN PORT ${port}`)
// })
