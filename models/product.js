const mongoose = require("mongoose");

// define structure and fields of product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// creating collection with name Product in MongoDB by passing schema to it
const Product = mongoose.model('Product', productSchema);

module.exports = Product;