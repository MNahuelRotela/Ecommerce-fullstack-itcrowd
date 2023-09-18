const { Category, Subcategory,Product } = require("../../db");

const deleteSubCategory = async (req, res) => {
    const id = req.params.id;
    try {
      let dataProduct = await Product.findAll({
        where: {
          SubcategoryId: id,
        },
      });
      if (dataProduct.length <=0) {
        let deletedSubcategory = await Subcategory.destroy({
          where: {
            id,
          },
        });
        deletedSubcategory
          ? res.status(200).send({
            successMsg: "Subcategory has been deleted.",
            data: deletedSubcategory,
          })
          : res.status(401).send({ errorMsg: "Subcategory doesn't exist" });
      } else {
        res.status(401).send({ errorMsg: "Subcategory can't be deleted because have associated products" });
      }
    } catch (error) {
      res.status(500).send({ errorMsg: error.message });
    }
  };

module.exports = {
    deleteSubCategory,
    };