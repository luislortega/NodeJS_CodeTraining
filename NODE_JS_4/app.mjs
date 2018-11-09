import express from 'express'
import * as consts_global from './KERNEL_DOCS/GLOBALS/consts.mjs'
import parse from 'url';

const app = express()
const port = 5000;


// app.get('/', (req, res) => {
//     res.send(`This the index page: ${consts_global.get_MainDir()}`)
// })

app.get("/", (req, res) => {
    //app.use(express.static(__dirname + '/public'));
    res.sendFile('KERNEL_DOCS/PAGES/index.html', {root: consts_global.get_MainDir()})
})

app.listen(port, () => {
    console.log(`Listening in port: ${port}`)
})