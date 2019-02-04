// Define the model Bookmark
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {})

  // Associate the row of databases
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User) // User than use Bookmark
    Bookmark.belongsTo(models.Song) // Song than Bookmark the user
  }

  return Bookmark
}
