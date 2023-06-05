const Product = require('../models/product');

module.exports.destroy = async function(req, res){
    
    try {
        // getting the product to be deleted from database
        let product = await Product.findById(req.params.id);

        // handling error if product doesn't exist
        if(!product){
            return res.json(404, {
                error: 'Product not found in database'
            })
        }

        // using deleteOne method as remove method has been deprecated
        product.deleteOne();

        return res.json(200, {
            data: {
                message: "Product deleted"
            }
        });

        // handling error
    } catch (error) {
        return res.json(500, {
            error: error.message
        })
    }

};