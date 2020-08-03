//IMPORT
const historyModels =require('../Models/history');

//IMPLEMENTASI
const historyControllers={
    getAllHistory :(_,res)=>{
        historyModels
        .getAllHistory()
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })
    },
    postNewHistory :(req,res)=>{
        historyModels
        .postNewHistory(req.body)
        .then((results)=>{
            res.json(results);
        }).catch((error)=>{
            res.json(error);
        })
    }
}

//EXPORTS
module.exports = historyControllers;