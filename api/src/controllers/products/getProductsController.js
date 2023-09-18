const { Product } = require('../../db.js');

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getProducts
};