const Product = require('../models/product');

module.exports.update = async function(req, res) {

    try {

        let updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
        // parseInt will convert string to number from query
            { quantity: parseInt(req.query.number, 10) },
        // new will return the updated product
            { new: true }
        );
    
        return res.json(200, {
            data: {
                product: updatedProduct
            },
            message: "updated successfully"
        });

    } catch (error) {
        return res.json(500, {
            error: error.message
        });
    }
    
}