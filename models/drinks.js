const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema ({
    name: {type: String, required: true},
    image: {type: String, required: true, default: 'https://images-na.ssl-images-amazon.com/images/I/412P4QgYOiL.jpg'},
    ingredients: {type: String},
    price: {type: Number, required: true}
})

module.exports = mongoose.model('Drink', drinkSchema)