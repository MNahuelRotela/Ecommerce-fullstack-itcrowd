const { Category, Subcategory } = require("../../db");

const getCategories = async (req, res, next) => {
    try {
      let dataCategory = await Category.findAll({});
      if (!dataCategory.length) {
        res.status(404).send({ errorMsg: "Categories not found." });
      }
      dataCategory = dataCategory.map((category) => {
        return {
          name: category.name,
          id: category.id,
        };
      });
      res
        .status(200)
        .send({ successMsg: "Here are your categories.", data: dataCategory });
    } catch (error) {
      res.status(500).send({ errorMsg: error.message });
    }
  };

  module.exports = {
    getCategories,
    };
  
