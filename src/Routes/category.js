//IMPORT
const express = require('express');

//FILEPATH IMPORT
const categoryControllers = require('../Controllers/category');

//DEKLARASI
const categoryRouter = express.Router();

//IMPLEMENTASI
categoryRouter.get('/',categoryControllers.getProductCategory);
categoryRouter.post('/',categoryControllers.postNewCategory);


//EXPORTS
module.exports = categoryRouter;