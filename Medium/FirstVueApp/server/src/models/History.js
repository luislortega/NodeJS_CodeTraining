// Define the model Bookmark
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {})

  // Associate the row of databases
  History.associate = function (models) {
    History.belongsTo(models.User) // User than use Bookmark
    History.belongsTo(models.Song) // Song than Bookmark the user
  }

  return History
}
