//IMPORT
const productModels = require('../Models/product');

// IMPLEMENTASI
const productControllers = {
    getAllProduct:(_,res)=>{
        productModels
        .getAllProduct()
        .then((results)=>{
            res.status(200).json(results);
        })
        .catch((error)=>{
            res.status(500).json(error);
        })
    },
    postNewProduct:(req,res)=>{
        productModels
        .postNewProduct(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);     
        })
    },
    updateProduct:(req,res)=>{
        productModels
        .updateProduct(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    deleteProduct:(req,res)=>{
        productModels
        .deleteProduct(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    sortProductByName : (req,res)=>{
        productModels
        .sortProductByName()
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    sortProductByCategory : (req,res)=>{
        productModels
        .sortProductByCategory()
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    sortProductByPrice : (req,res)=>{
        productModels
        .sortProductByPrice()
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    searchProductByName :(req,res)=>{
        productModels
        .searchProductByName(req.query.product_name)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    }
}

//EXPORTS
module.exports = productControllers;