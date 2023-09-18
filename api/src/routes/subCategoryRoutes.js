const {Router} = require('express');

const createSubCategoryController = require('../controllers/subcategory/createSubCategoryController');
const getSubCategoriesController = require('../controllers/subcategory/getSubCategoriesController');
const getSubCategoryController = require('../controllers/subcategory/getSubCategoryController');
const updateSubCategoryController = require('../controllers/subcategory/updateSubCategoryController');
const deleteSubCategoryController = require('../controllers/subcategory/deleteSubCategoryController');

const SubCategoriesRouter = Router();

SubCategoriesRouter.post('/', createSubCategoryController.createSubCategory);

SubCategoriesRouter.get('/', getSubCategoriesController.getSubCategories);

SubCategoriesRouter.get('/:id', getSubCategoryController.getSubCategory);

SubCategoriesRouter.put('/:id', updateSubCategoryController.updateSubCategory);

SubCategoriesRouter.delete('/:id', deleteSubCategoryController.deleteSubCategory);

module.exports = SubCategoriesRouter;