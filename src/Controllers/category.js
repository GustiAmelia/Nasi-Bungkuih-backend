//IMPORT
const categoryModels = require('../Models/product');

// IMPLEMENTASI
const categoryControllers = {
    getProductCategory:(_,res)=>{
        categoryModels
        .getProductCategory()
        .then((results)=>{
            res.json(results);
        })
        .catch((error)=>{
            res.json(error);
        })
    },
    postNewCategory:(req,res)=>{
        categoryModels
        .postNewCategory(req.body)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res,json(error);     
        })
    },
    updateCategory:(req,res)=>{
        categoryModels
        .updateCategory(req.body,req.params)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })
    },
    deleteCategory:(req,res)=>{
        categoryModels
        .deleteCategory(req.body)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })

    }
}

//EXPORTS
module.exports = categoryControllers;