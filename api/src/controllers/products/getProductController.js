const { Op } = require('sequelize');
const { Product, Brand } = require('../../db.js');

const getProduct = async (req, res, next) => {
  try {
    const { name, description } = req.query;

    if (name || description) {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
          description: {
            [Op.iLike]: `%${description}%`,
          },
        },
        include: Brand,
      });

      return res.send(products);
    } else {
      const { id } = req.params;

      const product = await Product.findByPk(id, { include: Brand });

      if (!product) {
        return res.status(404).send({ message: 'Product not found' });
      }

      return res.send(product);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProduct,
};