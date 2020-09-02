//IMPORT
const express = require('express');

//FILEPATH IMPORT
const productControllers =require('../Controllers/product');
const uploadImage=require('../Helpers/Middlewares/upload');
const checkToken = require('../Helpers/Middlewares/checkToken');

//DEKLARASI
const productRouter = express.Router();

//IMPLEMENTASI
productRouter.get('/',productControllers.getAllProduct);
productRouter.post('/',uploadImage.singleUpload,productControllers.postNewProduct);
productRouter.patch('/updateImage',checkToken.adminToken,uploadImage.singleUpload,productControllers.updateProduct);
productRouter.patch('/',checkToken.adminToken,productControllers.updateProduct);
productRouter.delete('/',checkToken.adminToken,productControllers.deleteProduct);
productRouter.get('/search',checkToken.checkToken,productControllers.searchProductByName);



//EXPORTS
module.exports = productRouter;

