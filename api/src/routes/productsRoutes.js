const {Router} = require('express');
const createProductController = require('../controllers/products/createProductController');
const getProductsController = require('../controllers/products/getProductsController');
const getProductController = require('../controllers/products/getProductController');
const updateProductController = require('../controllers/products/updateProductController');
const deleteProductController = require('../controllers/products/deleteProductController');


const ProductsRouter = Router();

ProductsRouter.post('/', createProductController.createProduct);

ProductsRouter.get('/', getProductsController.getProducts);

ProductsRouter.get('/:id', getProductController.getProduct);



ProductsRouter.put('/:id', updateProductController.updateProduct);

ProductsRouter.delete('/:id', deleteProductController.deleteProduct);



module.exports = ProductsRouter;
