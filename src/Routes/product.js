//IMPORT
const express = require('express');

//FILEPATH IMPORT
const productControllers =require('../Controllers/product');

//DEKLARASI
const productRouter = express.Router();

//IMPLEMENTASI
productRouter.get('/',productControllers.getAllProduct);
productRouter.post('/',productControllers.postNewProduct);
productRouter.patch('/',productControllers.updateProduct);
productRouter.delete('/',productControllers.deleteProduct);
productRouter.get('/sortingProductByName',productControllers.sortProductByName);
productRouter.get('/sortingProductByCategory',productControllers.sortProductByCategory);
productRouter.get('/sortingProductByPrice',productControllers.sortProductByCategory);
productRouter.get('/searchProductByName',productControllers.searchProductByName);



//EXPORTS
module.exports = productRouter;


