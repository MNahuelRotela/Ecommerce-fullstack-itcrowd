const { Brand, Product } = require('../../db.js');

const deleteBrand = async (req, res, next) => {
    const { id } = req.params;
    try {
        const brand = await Brand.findByPk(id);
        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }
        await brand.destroy();
        res.json({ message: 'Brand deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    deleteBrand
};