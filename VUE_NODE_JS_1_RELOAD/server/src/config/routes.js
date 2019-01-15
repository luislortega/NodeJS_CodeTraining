const AuthController = require('../controller/AuthController')
const AuthControllerPolicy = require('../policies/AuthControllerPolicy')

module.exports = (app) => {
  /**
   * Register new user session
   * Register in the ORM
   */
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)
}
