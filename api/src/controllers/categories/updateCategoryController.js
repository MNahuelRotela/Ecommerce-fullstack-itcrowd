const { Category, Subcategory } = require("../../db");

const updateCategory = async (req, res, next) => {
    const id = req.params.id;
    const { name } = req.body;
    try {
      let dataCategory = await Category.findOne({
        where: {
          id,
        },
      });
      if (!dataCategory) {
        res.status(404).send({ errorMsg: "Category not found." });
      } else {
        let updateCategory = await Category.update(
          {
            name,
          },
          {
            where: {
              id,
            },
          }
        );
        updateCategory
          ? res.status(200).send({
              successMsg: "Category has been updated.",
              data: updateCategory,
            })
          : res.status(401).send({ errorMsg: "Category doesn't exist" });
      }
    } catch (error) {
      res.status(500).send({ errorMsg: error.message });
    }
  }

module.exports = {
    updateCategory,
    };
    