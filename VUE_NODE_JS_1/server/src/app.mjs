import express from 'express'
// new imports...
import bodyParser from 'body-parser'
import cors from 'cors' // $npm i cors
import morgan from 'morgan'// $npm i morgan
// import { sequelize } from './models'
import routes from './config/routes'

const port = 8081
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

/**
 * app.post (http post request)
 * app.get (http get request)
 */
routes(app) // Routes of the application

app.listen(port, () => {
  console.log(`SERVER RUNNING: ${port}`)
})

// sequelize.sync()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`SERVER RUNNING: ${port}`)
//     })
//   })
