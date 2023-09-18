const { Category, Subcategory } = require("../../db");

const deleteCategory = async (req, res) => {
    const id = req.params.id;
    try {
      let dataSubcategory = await Subcategory.findAll({
        where: {
          CategoryId: id,
        },
      });
      if (dataSubcategory.length <=0) {
        let deleteCategorydb = await Category.destroy({
          where: {
            id,
          },
        });
        deleteCategorydb
          ? res.status(200).send({
            successMsg: "Category has been deleted.",
            data: deleteCategorydb,
          })
          : res.status(401).send({ errorMsg: "Category doesn't exist" });
      } else {
        res.status(401).send({ errorMsg: "Category can't be deleted because has associated Subcategories" });
      }
    } catch (error) {
      res.status(500).send({ errorMsg: error.message });
    }
  };

module.exports = {
    deleteCategory,
    };