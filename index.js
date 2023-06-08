const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const port = 8000;

// Parsing JSON bodies for API requests
app.use(express.json());

// Parse URL-encoded bodies for form submissions (when data is sent through x-www-form-urlencoded in Postman)
app.use(express.urlencoded({ extended: true }));

const db = require('./config/mongoose');

// Router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){console.log('Problem in connecting to server', err)};
    console.log('Yup! My Express server is running on Port:', port);
})