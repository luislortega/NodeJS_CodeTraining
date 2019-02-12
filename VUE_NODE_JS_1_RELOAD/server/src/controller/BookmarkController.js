const { Bookmark } = require('../models')

module.exports = {
  // Send all the bookmarks
  async getBookmark (req, res) {
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
  },
  // Create the bookmark
  async setBookmark (req, res) {
    try {
      const { userId, songId } = req.body.params

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })

      if (bookmark) {
        return res.status(400).send({
          error: 'You have alredy this bookmark'
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })

      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'Error setting the bookmark'
      })
    }
  },
  // Destroy the bookmark
  async deleteBookmark (req, res) {
    try {
      /**
       * This don't work.
       */
      const { bookmarkId } = req.params
      /*
      console.log('Testing: ')
      const bookmark = Bookmark.findByPk(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark) */
      res.send(':) finish process')
    } catch (err) {
      res.status(500).send({
        error: 'Error deleting all the songs'
      })
    }
  }
}
