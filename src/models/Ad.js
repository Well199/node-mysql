const db = require('../db')

const Ad = {
    id: Number,
    image_id: Number,
    user_id: Number,
    created_at: Date,
    state_id: Number,
    title: String,
    category_id: Number,
    price: Number,
    priceNegotiable: Boolean,
    description: String,
    views: Number,
    status: String
}

module.exports = Ad