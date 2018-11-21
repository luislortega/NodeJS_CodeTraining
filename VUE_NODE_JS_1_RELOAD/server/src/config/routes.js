module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `user ${req.body.email}`
    })
  })
}
