const express = require('express');

const router = express.Router();

const createProduct = require('../api/create_product');

router.post('/', createProduct.create);

module.exports = router;