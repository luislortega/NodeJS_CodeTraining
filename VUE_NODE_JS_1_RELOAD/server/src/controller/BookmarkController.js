const { Bookmark } = require('../models')

module.exports = {
  // Send all the bookmarks
  async getAllBookmarks (req, res) {
    try {
      const { songId, userId } = req.query

      const bookmark = await Bookmark.findAll({
        where: {
          SongId: songId,
          UserId: userId
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
