module.exports = (app) => {
  app.use((req, res) => {
    res.render('404')
  })
}
