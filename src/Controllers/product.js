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
            formResponse.success(res,req.body,200);
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
    searchProductByName :(req,res)=>{
        const{product_name,by,order,page,limit}=req.query;
        productModels
        .searchProductByName(product_name,by,order,page,limit)
        .then((results)=>{
            formResponse.pagination(req,res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    }
}

//EXPORTS
module.exports = productControllers;