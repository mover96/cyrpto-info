const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const webpack = require('webpack')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const fs = require('fs')
const bufReplace = require('buffer-replace')

const dev = true

let callbackUrlSet = 'http://leftanglebracket.com/oauthcallback'
if (dev == true) {
  callbackUrlSet = 'http://localhost:8000/oauthcallback'
}

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '890927523958-v4h0fo9magi3nohr89kil525mdhq5nr9.apps.googleusercontent.com',
      clientSecret: 'sxijk9LazvmLsJ_4BzOl1xT6',
      callbackURL: callbackUrlSet
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile)
    }
  )
)

const app = express()

app.set('port', process.env.PORT || 8000)

if (!dev) {
} else {
  const config = require('./webpack.config.js')
  const compiler = webpack(config)
  const webpackMiddleware = require('webpack-dev-middleware')
  app.use(require('webpack-hot-middleware')(compiler))
  app.use(webpackMiddleware(compiler, {}))
}

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'node_modules/react')))
app.use(
  '/react-dom',
  express.static(path.join(__dirname, 'node_modules/react-dom'))
)
app.use(passport.initialize())
app.use(passport.session())

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

app.get(
  '/oauthcallback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Authenticated successfully
    res.header('X-Frame-Options', 'ALLOW-FROM http://localhost:8000/')
    res.redirect('/')
  }
)

app.get('/', ensureAuthenticated, (req, res) => {
  if (req.user.id == '102655073361673537883' || '103259939309927820028') {
    res.header('X-Frame-Options', 'ALLOW-FROM http://localhost:8000/')
    res.sendFile(path.join(__dirname, 'index.html'))
  } else {
    let data = fs.readFileSync(path.join(__dirname, 'unauthorized.html'))
    data = data.toString().replace('g_id_replace', req.user.id)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    res.end()
  }
})

let saveMarkets = {}
let lastTime = null

app.get('/wci', (req, res) => {
  //throttle requests
  if (Date.now() - lastTime > 60000) {
    fetch(
      'https://www.worldcoinindex.com/apiservice/json?key=TXQy4zAtd1R27ZIb52rVoQmTq'
    )
      .then(WCIres => WCIres.json())
      .then(coinData => {
        saveMarkets = coinData
        lastTime = Date.now()
        res.json(coinData)
      })
  } else {
    res.json(saveMarkets)
  }
})

app.listen(app.get('port'), () => {
  console.log('Server started on port ', app.get('port'))
})

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/auth/google')
}
