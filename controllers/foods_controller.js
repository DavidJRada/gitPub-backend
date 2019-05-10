const express = require('express')
const foods = express.Router()
const Food = require('../models/foods')

foods.post('/', (req, res) => {
    Food.create(req.body, (err, createdFood) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(createdFood)
    })
})

foods.get('/', (req, res) => {
    Food.find({}, (err, foundfoods) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(foundfoods)
    })
})

foods.delete('/:id', (req, res) => {
    Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
        if (err) {
            res.status(400).json({ err: err.message })
        }
        res.status(200).json(deletedFood)
    })
})

foods.put('/:id', (req, res) => {
    Food.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFood) => {
      if (err) {
        res.status(400).json({ err: err.message })
      }
      res.status(200).json(updatedFood)
    })
  })

module.exports = foods