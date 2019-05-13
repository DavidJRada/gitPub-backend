const mongoose = require('mongoose')

const foodSchema = mongoose.Schema ({
    name: {type: String, required: true},
    image: {type: String, default: 'https://media.gettyimages.com/photos/tasty-hamburger-with-french-fries-and-beer-on-wooden-table-picture-id638349896?s=2048x2048'},
    ingredients: {type: String},
    price: Number
})

module.exports = mongoose.model('Food', foodSchema)