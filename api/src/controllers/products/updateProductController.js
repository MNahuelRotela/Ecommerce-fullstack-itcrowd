const { Product, Brand } = require('../../db.js');

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, img_url, price, itemNumber, discountPercentage, stock, isPublished, brand } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const updatedProduct = await product.update({
      name,
      description,
      img_url,
      price,
      itemNumber,
      discountPercentage,
      stock,
      isPublished,
    });

    if (brand) {
      const foundBrand = await Brand.findOne({
        where: { name: brand },
      });

      if (foundBrand) {
        await updatedProduct.setBrand(foundBrand);
      }
    }

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
    updateProduct,
};