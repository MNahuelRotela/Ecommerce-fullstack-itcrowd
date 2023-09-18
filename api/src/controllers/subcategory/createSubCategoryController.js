const { Category, Subcategory } = require("../../db");

const createSubCategory = async (req, res, next) => {
    try {
      let { name, CategoryId } = req.body;
      if (!name || !CategoryId) {
        res.status(400).send({ errorMsg: "Missing data" });
      } else {
        const [newSubCategory, created] = await Subcategory.findOrCreate({
          where: {
            name,
            CategoryId,
          },
        });
        created
          ? res.status(201).send({
            successMsg: "Subcategory successfully created.",
            data: newSubCategory,
          })
          : res.status(400).send({ errorMsg: "Subcategory already exists." });
      }
    } catch (error) {
      res.status(500).send({ errorMsg: error.message });
    }
  };

  module.exports = {
    createSubCategory,
    };