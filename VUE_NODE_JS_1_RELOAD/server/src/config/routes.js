const AuthController = require('../controller/AuthController')
const AuthControllerPolicy = require('../policies/AuthControllerPolicy')
const SongController = require('../controller/SongController')

module.exports = (app) => {
  /**
   * Register new user session
   * Register in the ORM
   */
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register)

  // Send the condition for login
  app.post('/login',
    AuthController.login)

  // Get songs
  app.get('/songs',
    SongController.getAllSongs
  )

  // Create Song
  app.post('/songs',
    SongController.createSong)

  // GetSong by id
  app.get('/songs/:songID',
    SongController.getSongByID)

  // Get id and object of the song to update
  app.put('/songs/update/:songID',
    SongController.updateSong)
}
