const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ecommerce_API:M6bgz5wlK1rnYabC@mestaboss.qlrtxe3.mongodb.net/?retryWrites=true&w=majority');

// acquiring mongoose connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to DB :: MongoDB');
});

module.exports = db;