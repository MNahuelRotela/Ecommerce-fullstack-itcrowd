const {Router} = require('express');

const createCategoryController = require('../controllers/categories/createCategoryController');
const getCategoriesController = require('../controllers/categories/getCategoriesController');
const getCategoryController = require('../controllers/categories/getCategoryController');
const updateCategoryController = require('../controllers/categories/updateCategoryController');
const deleteCategoryController = require('../controllers/categories/deleteCategoryController');

const CategoriesRouter = Router();

CategoriesRouter.post('/', createCategoryController.createCategory);

CategoriesRouter.get('/', getCategoriesController.getCategories);

CategoriesRouter.get('/:id', getCategoryController.getCategory);

CategoriesRouter.put('/:id', updateCategoryController.updateCategory);

CategoriesRouter.delete('/:id', deleteCategoryController.deleteCategory);

module.exports = CategoriesRouter;
