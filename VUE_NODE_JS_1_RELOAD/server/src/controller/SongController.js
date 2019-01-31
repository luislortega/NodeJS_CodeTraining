const { Song } = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      console.log(req.query.search, 'THIS ISSS ::::::::::::::::::')
      let songs = null
      const search = req.query.search
      if (search) {
        /** this not work :( */
        songs = await Song.findAll({
          where: {
            $or: [{
              album: {
                $like: `%${search}%`
              }
            }]
          }
        })
        console.log(songs, ' MODEL :OOOOOOOOOOOO')
      } else {
        songs = await Song.findAll({
          limit: 10
        })
      }

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
  async updateSong (req, res) {
    try {
      const songs = await Song.update(req.body, {
        where: {
          id: req.params.songID
        }
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Error updating the song'
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
