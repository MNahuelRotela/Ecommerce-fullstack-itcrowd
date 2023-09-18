const { Category, Subcategory } = require("../../db");

const getSubCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        let dataSubCategory = await Subcategory.findOne({
        where: {
            id,
        },
        include: {
            model: Category,
            attributes: ["id", "name"],
        },
        });
        dataSubCategory
        ? res.status(200).send({
            successMsg: "Subcategory found.",
            data: dataSubCategory,
            })
        : res.status(404).send({ errorMsg: "Subcategory not found." });
    } catch (error) {
        res.status(500).send({ errorMsg: error.message });
    }
    };

module.exports = {
    getSubCategory,
    };
