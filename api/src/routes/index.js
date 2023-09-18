const { Router } = require("express");
const router = Router();

const brandsRoutes = require("./brandsRoutes");

const productsRoutes = require("./productsRoutes");

const categoriesRoutes = require("./categoryRoutes");

const subCategoriesRoutes = require("./subCategoryRoutes");

const userRoutes = require("./userRoutes");

router.use("/products", productsRoutes);

router.use("/brands", brandsRoutes);

router.use("/categories", categoriesRoutes);

router.use("/subcategories", subCategoriesRoutes);

router.use("/users", userRoutes);

module.exports = router;

