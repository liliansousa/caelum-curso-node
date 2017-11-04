module.exports = function() {
  const express = require('express')
  const bodyParser = require('body-parser')
  const load = require('express-load')
  const expressValidator = require('express-validator')

  const app = express()

  require('dotenv').config()

  app.set('view engine', 'ejs')

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(expressValidator())
  app.use(express.static('./public'))

  app.use((req, res, next) => {
    console.log('URL: ', req.url)
    next()
  })

  load('infra')
      .then('dao')
      .then('routes')
      .then('errorStatusHttp')
      .into(app)

  return app
}
