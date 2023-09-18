const { Category, Subcategory } = require("../../db");

const updateSubCategory = async (req, res, next) => {
    try {
        let { name, CategoryId } = req.body;
        let { id } = req.params;
        if (!name || !CategoryId) {
        res.status(400).send({ errorMsg: "Missing data" });
        } else {
        const [updatedSubCategory] = await Subcategory.update(
            {
            name,
            CategoryId,
            },
            {
            where: {
                id,
            },
            }
        );
        updatedSubCategory
            ? res.status(200).send({
                successMsg: "Subcategory successfully updated.",
                data: updatedSubCategory,
            })
            : res.status(400).send({ errorMsg: "Subcategory not found." });
        }
    } catch (error) {
        res.status(500).send({ errorMsg: error.message });
    }
    };

module.exports = {
    updateSubCategory,
    };
    