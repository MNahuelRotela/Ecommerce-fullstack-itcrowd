const { Category, Subcategory } = require("../../db");

const getSubCategories = async (req, res, next) => {
  try {
    let dataSubCategory = await Subcategory.findAll({});
    if (!dataSubCategory.length) {
      return res.status(404).send({ errorMsg: "Subcategories not found." });
    }
    dataSubCategory = dataSubCategory.map((sub) => {
      return {
        name: sub.name,
        id: sub.id,
        CategoryId: sub.CategoryId,
      };
    });
    res.status(200).send({
      successMsg: "Here are your subcategories.",
      data: dataSubCategory,
    });
  } catch (error) {
    res.status(500).send({ errorMsg: error.message });
  }
};

module.exports = {
  getSubCategories,
};