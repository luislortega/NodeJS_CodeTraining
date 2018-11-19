/**
 * Imports...
 */
import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config/config.mjs'

const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync("C:/Users/Luis Gerardo/Documents/_JAVASCRIPT/VUE_NODE_JS_1/")
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join("C:/Users/Luis Gerardo/Documents/_JAVASCRIPT/VUE_NODE_JS_1/", file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db