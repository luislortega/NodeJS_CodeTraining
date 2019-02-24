const { History, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  // Send all the histories
  async index (req, res) {
    try {
        const userId = req.user.id
        const history = await History.findAll({
          where: {
              UserId: userId
          },
          include: [{
            model: Song
          }]
        }).map(history => history.toJSON())
          .map(history => _.extend(
            {},
            history.Song,
            history)
          )
        res.send(_.uniqBy(history, history => history.SongId))
      } catch (err) {
        res.status(500).send({
          error: 'Error sending all the historys'
        })
      }
  },
  // Create the history
  async post (req, res) {
    try {
        const userId = req.user.id
        const { songId } = req.body

        const history = await History.create({
          SongId: songId,
          UserId: userId
        })

        res.send(history)
      } catch (err) {
        res.status(500).send({
          error: 'Error creating the history'
        })
      }
  }
}
