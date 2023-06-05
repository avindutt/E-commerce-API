// requiring express
const express = require('express');

// creating router using express
const router = express.Router();

const productApi = require('../api/product_api');

// defining different routes
router.get('/product', productApi.index);
router.use('/product/create', require('./create_product'));
router.use('/products', require('./delete_product'));

// exporting the router created for further use
module.exports = router;