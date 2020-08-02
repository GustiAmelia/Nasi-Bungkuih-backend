//IMPORT
const categoryModels = require('../Models/product');

// IMPLEMENTASI
const categoryControllers = {
    getProductCategory:(_,res)=>{
        productModels
        .getAllProduct()
        .then((results)=>{
            res.json(results);
        })
        .catch((error)=>{
            res.json(error);
        })
    },
    postNewCategory:(req,res)=>{
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
module.exports = categoryControllers;