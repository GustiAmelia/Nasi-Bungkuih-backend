//IMPORT
const historyModels =require('../Models/history');
const formResponse= require('../Helpers/Form/formResponse');

//IMPLEMENTASI
const historyControllers={
    getAllHistory :(_,res)=>{
        historyModels
        .getAllHistory()
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    postNewHistory :(req,res)=>{
        historyModels
        .postNewHistory(req.body)
        .then((results)=>{
            formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    }
}

//EXPORTS
module.exports = historyControllers;