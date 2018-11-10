import express from 'express'
import * as consts_global from './KERNEL_DOCS/GLOBALS/consts.mjs'

const app = express()
const port = 5000;

// app.get('/', (req, res) => {
//     res.send(`This the index page: ${consts_global.get_MainDir()}`)
// })
app.use('/KERNEL_DOCS', express.static('KERNEL_DOCS')) //WORK!!! :'D

app.get("/", (req, res) => {
    res.sendFile('KERNEL_DOCS/PAGES/index.html', {root: consts_global.get_MainDir()})
})

app.get("/regards", (req, res) => {
    res.sendFile('KERNEL_DOCS/PAGES/regards.html', {root: consts_global.get_MainDir()})
})

//Default page
app.get("*", function(req,res){
    res.send("404 page");
});


app.listen(port, () => {
    console.log(`Listening in port: ${port}`)
})