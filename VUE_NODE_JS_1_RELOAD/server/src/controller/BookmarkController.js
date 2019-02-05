// Controller for all the Bookmarks
const { Bookmark } = require('../models')
// const { Sequelize } = require('./../models')

module.exports = {
  // Send all the bookmarks
  async getAllBookmarks (req, res) {
    try {
      // let songs = null
      // const search = req.query.songId
      const { songId } = req.query

      const bookmark = await Bookmark.findAll({
        where: {
          SongId: songId
        }
      })

      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error sending all the songs'
      })
    }
  }
}
