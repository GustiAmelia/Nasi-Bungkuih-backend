//IMPORT
const express = require('express');

//FILEPATH IMPORT
const productControllers =require('../Controllers/product');
const uploadImage=require('../Helpers/Middlewares/upload');
const checkToken = require('../Helpers/Middlewares/checkToken');

//DEKLARASI
const productRouter = express.Router();

//IMPLEMENTASI
productRouter.get('/',checkToken.checkToken,productControllers.getAllProduct);
productRouter.post('/',checkToken.adminToken,uploadImage.singleUpload,productControllers.postNewProduct);
productRouter.patch('/updateImage',checkToken.adminToken,uploadImage.singleUpload,productControllers.updateProduct);
productRouter.patch('/',checkToken.adminToken,productControllers.updateProduct);
productRouter.delete('/',checkToken.adminToken,productControllers.deleteProduct);
productRouter.get('/sort',checkToken.adminToken,productControllers.sortProduct);
productRouter.get('/search',checkToken.adminToken,productControllers.searchProductByName);



//EXPORTS
module.exports = productRouter;


