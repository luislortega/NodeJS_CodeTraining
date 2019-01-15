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
    try {
      /**
       * NEED FIX IT :p
       */
      const { email, password } = req.body

      const user = await User.findOne(
        {
          where: {
            email: email
          }
        })

      if (!user) {
        return res.status(403).send({
          error: 'The login was incorrect'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: "ERROR 400 :'v"
      })
    }
  }
}
