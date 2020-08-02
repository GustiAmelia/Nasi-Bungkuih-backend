//IMPORT
const express = require('express');

//FILEPATH IMPORT
const productControllers =require('../Controllers/product');

//DEKLARASI
const productRouter = express.Router();

//IMPLEMENTASI
productRouter.get('/',productControllers.getAllProduct);
productRouter.post('/',productControllers.postNewProduct);


//EXPORTS
module.exports = productRouter;


