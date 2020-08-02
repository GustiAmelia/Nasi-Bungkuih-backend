//IMPORT
const productModels = require('../Models/product');

// IMPLEMENTASI
const productControllers = {
    getAllProduct:(_,res)=>{
        productModels
        .getAllProduct()
        .then((results)=>{
            res.json(results);
        })
        .catch((error)=>{
            res.json(error);
        })
    },
    postNewProduct:(req,res)=>{
        productModels
        .postNewProduct(req.body)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res,json(error);     
        })
    }
}

//EXPORTS
module.exports = productControllers;