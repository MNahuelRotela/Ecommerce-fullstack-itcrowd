const { Category, Subcategory } = require("../../db");

const getCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let dataCategory = await Category.findOne({
        where: {
            id,
        },
        include: {
            model: Subcategory,
            attributes: ["id", "name"],
        },
        });
        dataCategory
        ? res.status(200).send({
            successMsg: "Category found.",
            data: dataCategory,
            })
        : res.status(404).send({ errorMsg: "Category not found." });
    } catch (error) {
        res.status(500).send({ errorMsg: error.message });
    }
    };

module.exports = {
    getCategory,
    };