const {
    Product,
    Brand
} = require('../../db.js');

const createBrand = async (req, res, next) => {
    const {
        id,
        name,
        description,
        img_url
    } = req.body;
    try {
        const brand = await Brand.create({
            id,
            name,
            description,
            img_url
        });
        res.json(brand);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createBrand
};
