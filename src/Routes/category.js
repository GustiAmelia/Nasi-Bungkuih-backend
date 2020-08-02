//IMPORT
const express = require('express');

//FILEPATH IMPORT
const categoryControllers = require('../Controllers/category');

//DEKLARASI
const categoryRouter = express.Router();

//IMPLEMENTASI
categoryRouter.get('/',categoryControllers.getProductCategory);
categoryRouter.post('/',categoryControllers.postNewCategory);
categoryRouter.patch('/',categoryControllers.updateCategory);
categoryRouter.delete('/',categoryControllers.deleteCategory);



//EXPORTS
module.exports = categoryRouter;