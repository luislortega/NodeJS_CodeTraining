const { Song } = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Error sending all the songs'
      })
    }
  },
  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error creating the songs'
      })
    }
  },
  async getSongByID (req, res) {
    try {
      const song = await Song.findByPk(req.params.songID)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error getting the songs'
      })
    }
  }
}
