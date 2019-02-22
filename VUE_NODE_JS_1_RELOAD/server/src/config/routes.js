const AuthController = require('../controller/AuthController')
const AuthControllerPolicy = require('../policies/AuthControllerPolicy')
const SongController = require('../controller/SongController')
const BookmarkController = require('../controller/BookmarkController')
const HistoryController = require('../controller/HistoryController')
const isAuthenticated = require('../policies/isAuthenticated')

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

  // Get all the Bookmarks of the user
  app.get('/bookmarks',
    isAuthenticated,
    BookmarkController.getBookmark)

  // Set bookmark
  app.post('/bookmarks',
    isAuthenticated,
    BookmarkController.setBookmark)

  // Delete bookmark
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarkController.deleteBookmark)

  /** need add the get and post of history */
  app.get('/history',
    HistoryController.index)

  app.post('/history',
    HistoryController.post)
}
