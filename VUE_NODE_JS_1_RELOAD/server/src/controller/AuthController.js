const { User } = require('../models')

module.exports = {
  // method send
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
      // res.send({
      //     message: `user ${req.body.email}`
      // })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  // method to login
  async login (req, res) {

  }
}
