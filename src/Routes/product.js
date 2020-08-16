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
productRouter.get('/sort',productControllers.sortProduct);
productRouter.get('/search',productControllers.searchProductByName);
productRouter.get('/pagination',productControllers.getPaginationProduct);



//EXPORTS
module.exports = productRouter;


