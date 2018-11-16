import express from 'express'
import * as consts_global from './KERNEl_DOCS/GLOBALS/consts.mjs'

const app = express()

app.use('/KERNEL_DOCS', express.static('KERNEL_DOCS')) //WORK!!! :'D

app.get("/", (req, res) => {
    res.sendFile('KERNEL_DOCS/PAGES/index.html', {root: consts_global.get_MainDir()})
})


app.listen(consts_global.get_Port(), () => {
    console.log(`Listening in port: ${consts_global.get_Port()}`)
})