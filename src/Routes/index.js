//PACKAGE IMPORT
const express = require("express");

//FILEPATH IMPORT
const productRouter = require("./product");
const categoryRouter = require("./category");
const historyRouter = require("./history");
const authRouter = require("./auth");
const checkToken =require("../Helpers/Middlewares/checkToken");
//DEKLARASI
const indexRouter = express.Router();

//IMPLEMENTASI

// PRIVATE ROUTE
indexRouter.use('/product',checkToken,productRouter);
//PUBLIC ROUTE

indexRouter.use('/category',categoryRouter);
indexRouter.use('/history',historyRouter);
indexRouter.use('/auth',authRouter);


//EXPORTS
module.exports = indexRouter;

