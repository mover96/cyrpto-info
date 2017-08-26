const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const app = express()
const config = require('./webpack.config.js')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')

const compiler = webpack(config)

app.use(require('webpack-hot-middleware')(compiler))

app.use(webpackMiddleware(compiler, {}))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/react', express.static(path.join(__dirname, 'node_modules/react')))
app.use(
  '/react-dom',
  express.static(path.join(__dirname, 'node_modules/react-dom'))
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
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

app.listen(8000, () => {
  console.log('Server started on port ', 8000)
})
