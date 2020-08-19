//IMPORT
const productModels = require('../Models/product');
const formResponse= require('../Helpers/Form/formResponse');

// IMPLEMENTASI
const productControllers = {
    getAllProduct:(req,res)=>{
        const{page,limit}=req.query
        productModels
        .getAllProduct(page,limit)
        .then((results)=>{
            formResponse.pagination(req,res,results,200);
        })
        .catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    postNewProduct:(req,res)=>{
        productModels
        .postNewProduct(req.body)
        .then((results)=>{
            const object={
                msg: 'insert product success'
            }
            formResponse.success(res,object,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);    
        })
    },
    updateProduct:(req,res)=>{
        productModels
        .updateProduct(req.body)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    deleteProduct:(req,res)=>{
        productModels
        .deleteProduct(req.query)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    sortProduct : (req,res)=>{
        productModels
        .sortProduct(req.query)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    searchProductByName :(req,res)=>{
        productModels
        .searchProductByName(req.query.product_name)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    }
}

//EXPORTS
module.exports = productControllers;