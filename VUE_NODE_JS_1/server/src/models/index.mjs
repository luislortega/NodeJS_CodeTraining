/**
 * Imports...
 */
import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config/config'

const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readSync(__dirname).filter((file) =>
    file !== 'index.mjs'
).forEach((file)=>{
    const model = sequelize.import(path.join(__dirname, file)) //this isn't working
    db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db