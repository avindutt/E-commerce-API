const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/api_development');

// acquiring mongoose connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to DB :: MongoDB');
});

module.exports = db;