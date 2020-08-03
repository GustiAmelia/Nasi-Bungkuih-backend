//IMPORT
const express = require('express');
const historyControllers = require('../Controllers/history');

//DEKLARASI
const historyRouter = express.Router();

//IMPLEMENTASI
historyRouter.get('/',historyControllers.getAllHistory);
historyRouter.post('/',historyControllers.postNewHistory);

//EXPORTS
module.exports=historyRouter;