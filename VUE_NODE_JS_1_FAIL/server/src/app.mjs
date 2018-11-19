import express from 'express'
// new imports...
import bodyParser from 'body-parser'
import cors from 'cors' // $npm i cors
import morgan from 'morgan'// $npm i morgan
import * as sequelize from './models' // work
import routes from './config/routes'
import config from './config/config.mjs'

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/**
 * app.post (http post request)
 * app.get (http get request)
 */
routes(app) // Routes of the application

// app.listen(config.port, () => {
//   console.log(`SERVER RUNNING: ${config.port}`)
// })

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
