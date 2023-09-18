const { Category, Subcategory } = require("../../db");

const createCategory = async (req, res, next) => {
    try {
      let { name } = req.body;
      if (!name) {
        res.status(400).send({ errorMsg: "Missing data." });
      } else {
        const [newCategory, created] = await Category.findOrCreate({
          where: {
            name,
          },
        });
        created
          ? res.status(201).send({
              successMsg: "Category successfully created.",
              data: newCategory,
            })
          : res.status(400).send({ errorMsg: "Category already exists." });
      }
    } catch (error) {
      res.status(500).send({ errorMsg: error.message });
    }
  };
  
  module.exports = {
    createCategory,
    };


