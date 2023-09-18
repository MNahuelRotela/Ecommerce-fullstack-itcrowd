const { Product, Brand } = require('../../db.js');

const getBrands = async (req, res, next) => {
    try {
        const brands = await Brand.findAll();
        res.json(brands);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getBrands
};