const AuthController = require('../controller/AuthController'
)
module.exports = (app) => {
  /**
   * Routes....
   */
  app.post('/register', AuthController.register)
}
