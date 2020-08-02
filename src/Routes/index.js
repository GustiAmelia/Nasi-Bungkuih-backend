//PACKAGE IMPORT
const express = require("express");

//FILEPATH IMPORT
const productRouter = require("./product");
const categoryRouter = require("./category");
const historyRouter = require("./history");

//DEKLARASI
const indexRouter = express.Router();

//IMPLEMENTASI
indexRouter.use('/product',productRouter);
indexRouter.use('/category',categoryRouter);
indexRouter.use('/history',historyRouter);

//EXPORTS
module.exports = indexRouter;

