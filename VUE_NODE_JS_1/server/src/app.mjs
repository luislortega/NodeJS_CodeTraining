import express from 'express'
// new imports...
import bodyParser from 'body-parser'
import cors from 'cors' // $npm i cors
import morgan from 'morgan'// $npm i morgan

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was register`
  })
})

app.listen(process.env.port || 8081)
