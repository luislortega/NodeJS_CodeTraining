const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

/**
 * API REFERENCE:
 * http://docs.sequelizejs.com/manual/installation/usage.html#postgresql
 */
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// Functionality
fs
  .readdirSync(__dirname)
  .filter(
    (file) =>
      file !== 'index.js'
  )
  .forEach(
    (file) => {
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    }
  )

/**
   * Asociacion de tablas para Bookmark songs
   */
Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
