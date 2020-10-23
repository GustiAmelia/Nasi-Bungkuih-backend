//IMPORT
const productModels = require('../Models/product');
const formResponse= require('../Helpers/Form/formResponse');

// IMPLEMENTASI
const productControllers = {
    getAllProduct:(_,res)=>{
        productModels
        .getAllProduct()
        .then((results)=>{
            formResponse.success(res,results,200)
        })
        .catch((error)=>{
            formResponse.err(res,error,500)
        })
    },
    // getAllProduct:(req,res)=>{
    //     const{page,limit,name,sortby,order}=req.query
    //     productModels
    //     .getAllProduct(page,limit,name,sortby,order)
    //     .then((results)=>{
    //         formResponse.pagination(req,res,results,200);
    //     })
    //     .catch((error)=>{
    //         formResponse.err(res,error,500);
    //     })
    // },
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
            formResponse.success(res,req.body,200);
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
        const{name,sortby}=req.query
        productModels
        .searchProductByName(name,sortby)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    }
}

//EXPORTS
module.exports = productControllers;