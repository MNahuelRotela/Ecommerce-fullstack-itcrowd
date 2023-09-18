const { Brand, Product } = require('../../db.js');

const getBrand = async (req, res, next) => {
  const { id } = req.params;

  try {
    const brand = await Brand.findByPk(id, {
      include: [
        {
          model: Product,
          as: 'Products',
        },
      ],
    });

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    res.json(brand);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBrand,
};