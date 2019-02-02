const { Song } = require('../models')
// const Sequelize = require('./../app')
const { Sequelize } = require('./../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      let songs = null
      const search = req.query.search
      if (search) {
        songs = await Song.findAll({
          where: {
            // title, artist, album, or genre
            [Sequelize.Op.or]: [
              'title', 'album', 'artist', 'genre'
            ].map(key => ({
              [key]: {
                [Sequelize.Op.like]: [`%${search}%`]
              }
            }))
            /*
            [Sequelize.Op.or]: [{
              album: {
                [Sequelize.Op.like]: [`%${search}%`]
              }
            }, {
              title: {
                [Sequelize.Op.like]: [`%${search}%`]
              }
            }, {
              artist: {
                [Sequelize.Op.like]: [`%${search}%`]
              }
            }, {
              genre: {
                [Sequelize.Op.like]: [`%${search}%`]
              }
            }] */
          }
        })
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
