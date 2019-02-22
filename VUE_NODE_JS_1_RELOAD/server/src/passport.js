/**
 * MANAGER OF LOGIN
 *
 *
 * THIS CLASS ISN'T TEST-----
 */
const passport = require('passport')
const { User } = require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config')

passport.use(
  // Note: if you start a class with lowercase letter send error ._.
  new JwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret // key of the user
  }, async function (jwtPayLoad, done) {
    try {
      const user = User.findOne({
        where: {
          id: jwtPayLoad.id
        }
      })

      if (!user) {
        return done(new Error(), false)
      }
      return done(null, user)
    } catch (err) { // empty catch of es9
      return done(new Error(), false)
    }
  })
)

module.exports = null
