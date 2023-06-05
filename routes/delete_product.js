const express = require('express');

const router = express.Router();

const destroyProduct = require('../api/delete_product');

const updateProduct = require('../api/update_product')

// passing id as params
router.delete('/:id', destroyProduct.destroy);

// the part of url after update_quantity will consist of query
router.use('/:id/update_quantity', updateProduct.update);

module.exports = router;