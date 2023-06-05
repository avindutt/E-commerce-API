const Product = require('../models/product');

module.exports.create = async function(req, res){

    try {
        // creating the product by passing req.body to predefined fields in product schema
        let product = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });
    
        // returning json with response code 200 (successful) and passing product as data
        return res.json(200, {
            data: {
                product
            }
        });

        // handling error
    } catch (error) {
        return res.json(500, {
            error: error.message
        })
    }
}