//Dependencies
const express = require('express')
const app = express()
const PORT = 3004
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const MONGODB_URI = 'mongodb://localhost:27017'+ '/gitpub'
const Drink = require("./models/drinks")

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
const foodsController = require('./controllers/foods_controller')
app.use('/foods', foodsController)


app.get('/', (req, res) => {
    res.send('GitPub')
  })
  
  // Listen
  app.listen(PORT, () => {
    console.log('🎉🎊', 'drinking happening on port', PORT, '🎉🎊')
  })

  // app.get('/seed', async (req, res) => {
  //   const newDrinks =
  //     [
  //       {
  //         name: 'Beans',
  //         ingredients: 'A small pile of beans. Buy more beans for a big pile of beans.',
  //         image: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
  //         price: 5
  //       }, {
  //         name: 'Bones',
  //         ingredients: 'It\'s just a bag of bones.',
  //         image: 'http://bluelips.com/prod_images_large/bones1.jpg',
  //         price: 25
  //       }, {
  //         name: 'Bins',
  //         ingredients: 'A stack of colorful bins for your beans and bones.',
  //         image: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
  //         price: 7000
  //       }
  //     ]
  
  //   try {
  //     const seedItems = await Drink.create(newDrinks)
  //     res.send(seedItems)
  //   } catch (err) {
  //     res.send(err.message)
  //   }
  // })  
  