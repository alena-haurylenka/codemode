const express = require('express')
var favicon = require('serve-favicon')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/aboutme', (req, res) => res.render('pages/aboutme'))
  // .get('/db', (req, res) => res.render('pages/db'))
  .listen(PORT, () => console.log(`App is running at http://localhost:${ PORT }`))
