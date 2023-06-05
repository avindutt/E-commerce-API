const Product = require('../models/product');

module.exports.index = async function(req, res) {
    
    try {
        // find all products in database
        let product = await Product.find({});

        if(!product){
            return res.json(404, {
                error: "No products to show"
            });
        }
        
        // send as json body to the browser
        return res.json(200, {
            data: {
                product
            }
    });
    } catch (error) {
        return res.json(500, {
            error: error.message
        }); 
    }

}