const {Router} = require('express');
const createBrandController = require('../controllers/brands/createBrandController');
const getBrandsController = require('../controllers/brands/getBrandsController');
const getBrandController = require('../controllers/brands/getBrandController');
const updateBrandController = require('../controllers/brands/updateBrandController');
const deleteBrandController = require('../controllers/brands/deleteBrandController');

const BrandsRouter = Router();

BrandsRouter.post('/', createBrandController.createBrand);

BrandsRouter.get('/', getBrandsController.getBrands);

BrandsRouter.get('/:id', getBrandController.getBrand);

BrandsRouter.put('/:id', updateBrandController.updateBrand);

BrandsRouter.delete('/:id', deleteBrandController.deleteBrand);

module.exports = BrandsRouter;


