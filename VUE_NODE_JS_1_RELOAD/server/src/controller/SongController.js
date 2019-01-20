const { Song } = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    console.log('entre al backend method')
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      console.log('entre al backend y retorno', songs)
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
      console.log(song)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error sending all the songs'
      })
    }
  }
}
