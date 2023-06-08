const mongoose = require('mongoose');

mongoose.connect(process.env.DBURL);

// acquiring mongoose connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to DB :: MongoDB');
});

module.exports = db;