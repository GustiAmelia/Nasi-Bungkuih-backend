//IMPORT
const categoryModels = require('../Models/category');
const formResponse= require('../Helpers/Form/formResponse');

// IMPLEMENTASI
const categoryControllers = {
    getProductCategory:(_,res)=>{
        categoryModels
        .getProductCategory()
        .then((results)=>{
            formResponse.success(res,results,200);
        })
        .catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    postNewCategory:(req,res)=>{
        categoryModels
        .postNewCategory(req.body)
        .then((results)=>{
            const object ={
                msg:'insert category success'
            }
            formResponse.success(res,object,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);     
        })
    },
    updateCategory:(req,res)=>{
        categoryModels
        .updateCategory(req.body)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    deleteCategory:(req,res)=>{
        categoryModels
        .deleteCategory(req.query)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })

    }
}

//EXPORTS
module.exports = categoryControllers;