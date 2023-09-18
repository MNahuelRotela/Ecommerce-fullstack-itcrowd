const { Product, Brand } = require('../../db.js');

const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const product = await Product.findByPk(id);
    
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
        }
    
        await product.destroy();
    
        res.json({ message: 'Product deleted' });
    } catch (error) {
        next(error);
    }
    };

module.exports = {
    deleteProduct,
};
