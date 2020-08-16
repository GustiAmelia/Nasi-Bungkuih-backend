const uploadRouter =require('express').Router();
const uploadControllers=require('../Controllers/upload');

uploadRouter.post('/',uploadControllers.singleUpload)


module.exports=uploadRouter