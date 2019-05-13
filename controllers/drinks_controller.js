const express = require('express')
const drinks = express.Router()
const Drink = require('../models/drinks')

drinks.post('/', (req, res) => {
    Drink.create(req.body, (err, createdDrink) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(createdDrink)
    })
})

drinks.get('/', (req, res) => {
    Drink.find({}, (err, foundDrinks) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(foundDrinks)
    })
})

drinks.delete('/:id', (req, res) => {
    Drink.findByIdAndRemove(req.params.id, (err, deletedDrink) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(deletedDrink)
    })
})

drinks.put('/:id', (req, res) => {
    Drink.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDrink) => {
      if (err) {
        res.status(400).json({ err: err.message })
      }
      res.status(200).json(updatedDrink)
    })
  })

module.exports = drinks