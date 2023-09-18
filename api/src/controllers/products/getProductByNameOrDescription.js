const { Op } = require('sequelize');
const { Product, Brand } = require('../../db.js');

const getProductByNameOrDescription = async (req, res, next) => {
  try {
    const { name, description } = req.query;

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
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductByNameOrDescription,
};