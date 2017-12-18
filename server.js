const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const webpack = require('webpack')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const dev = true

let callbackUrlSet = 'http://leftanglebracket.com/oauthcallback'
if (dev == true) {
  callbackUrlSet = 'http://localhost:8000/oauthcallback'
}

passport.serializeUser(function(user, done) {
  console.log('hit cb 4')
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
      console.log('hit cb 3')
      return null, profile
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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'node_modules/react')))
app.use(
  '/react-dom',
  express.static(path.join(__dirname, 'node_modules/react-dom'))
)
app.use(passport.initialize())
app.use(passport.session())

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive']
  })
)

app.get(
  '/oauthcallback',
  passport.authenticate('google', {
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive']
  }),
  function(req, res) {
    // Authenticated successfully
    res.redirect('http://localhost:8000/')
  }
)

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'))
})

app.get('/', ensureAuthenticated, (req, res) => {
  console.log(req.user)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/unauthorized', (req, res) => {
  res.sendFile(path.join(__dirname, 'unauthorized.html'))
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
  res.redirect('/login')
}
