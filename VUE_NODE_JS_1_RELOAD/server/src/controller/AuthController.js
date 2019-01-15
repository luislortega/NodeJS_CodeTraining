const { User } = require('../models')

const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Login method and token for a week
function jwtSignUp (user) {
  // Seconds... Minutes... Hours... Days...
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

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
      const { email, password } = req.body

      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: "The user don't exist :(0"
        })
      }

      const isPasswordValid = await user.comparePassword(password)

      if (!isPasswordValid) {
        return res.status(400).send({
          error: 'The password was incorrect'
        })
      }

      const userJson = user.toJSON()

      /**
       * Send the user and the token :p
       */
      res.send({
        user: userJson,
        token: jwtSignUp(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'And error has ocurred trying log in'
      })
    }
  }
}
