/**
 *  Testing the routes with NodeJS
 */
import express from 'express'
import path from 'path';

const app = express()

//var path = require('path');

//app.get('/', (req, res) => res.send("hola")); ¿How i can send to HTML text?

app.get('/', (req,res) =>
    res.sendFile(path.join("C:/Users/Luis Gerardo/Documents/_JAVASCRIPT/NODE_JS_2/index.html")) //i cant use the global __dirname :o 
)

app.get('/hola', (req,res) => 
    res.send("hola")
)

const port = 5000

app.listen(port, () => console.log("Server online"))
