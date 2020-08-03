//IMPORT
const categoryModels = require('../Models/category');

// IMPLEMENTASI
const categoryControllers = {
    getProductCategory:(_,res)=>{
        categoryModels
        .getProductCategory()
        .then((results)=>{
            res.status(200).json(results);
        })
        .catch((error)=>{
            res.status(500).json(error);
        })
    },
    postNewCategory:(req,res)=>{
        categoryModels
        .postNewCategory(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);     
        })
    },
    updateCategory:(req,res)=>{
        categoryModels
        .updateCategory(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    deleteCategory:(req,res)=>{
        categoryModels
        .deleteCategory(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })

    }
}

//EXPORTS
module.exports = categoryControllers;