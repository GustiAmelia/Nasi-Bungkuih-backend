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
    },
    updateProduct:(req,res)=>{
        productModels
        .updateProduct(req.body)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })
    },
    deleteProduct:(req,res)=>{
        productModels
        .deleteProduct(req.body)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })
    },
    sortProductByName : (req,res)=>{
        productModels
        .sortProductByName()
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error)
        })
    },
    sortProductByCategory : (req,res)=>{
        productModels
        .sortProductByCategory()
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error)
        })
    },
    sortProductByPrice : (req,res)=>{
        productModels
        .sortProductByPrice()
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error)
        })
    },
    searchProductByName :(req,res)=>{
        productModels
        .searchProductByName(req.query.product_name)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })
    }
}

//EXPORTS
module.exports = productControllers;