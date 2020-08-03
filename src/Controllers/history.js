//IMPORT
const historyModels =require('../Models/history');

//IMPLEMENTASI
const historyControllers={
    getAllHistory :(_,res)=>{
        historyModels
        .getAllHistory()
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    },
    postNewHistory :(req,res)=>{
        historyModels
        .postNewHistory(req.body)
        .then((results)=>{
            res.status(200).json(results);
        }).catch((error)=>{
            res.status(500).json(error);
        })
    }
}

//EXPORTS
module.exports = historyControllers;