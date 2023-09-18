const { Brand, Product } = require('../../db.js');

const updateBrand = async (req, res, next) => {
    const { id } = req.params;
    const { name, description, img_url } = req.body;
    try {
        const brand = await Brand.findByPk(id);
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        await brand.update({
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
    updateBrand
};