import express from 'express';
//new imports...
import bodyParser from 'body-parser'
import cors from 'cors' //$npm i cors
import morgan from 'morgan'//$npm i morgan

let port = 5000
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get("/status", (req,res) => {
  res.send({
    message: 'Hello world from node with ES6/VUE/EXPRESS'
  })
})

app.listen(port, ()=>{
    console.log(`App running in port: ${port}`)
})