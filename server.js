//Dependencies
const express = require('express')
const app = express()
const PORT = 3004
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = 'mongodb://localhost:27017'+ '/gitpub'

// const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
// const corsOptions = {
//   origin (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

//MiddleWare
app.use(express.json()) // use .json(), not .urlencoded()
// app.use(cors(corsOptions))

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// Fix depreciation warnings
mongoose.set('useFindAndModify', false)

// Database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
})


// Controllers/Routes
const drinksController = require('./controllers/drinks_controller')
app.use('/drinks', drinksController)


app.get('/', (req, res) => {
    res.send('GitPub')
  })
  
  // Listen
  app.listen(PORT, () => {
    console.log('🎉🎊', 'drinking happening on port', PORT, '🎉🎊')
  })
  