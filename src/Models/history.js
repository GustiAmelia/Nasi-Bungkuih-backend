//IMPORT
const connection = require('../Configs/dbMySql');

//QUERY
const historyModels ={
    getAllHistory:()=>{
        return new Promise((resolve,reject)=>{
            const queryString='SELECT * FROM history';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    postNewHistory:(body)=>{
        return new Promise((resolve,reject)=>{
            const queryString='INSERT INTO history SET ?';
            connection.query(queryString,[body],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    }
};

//EXPORTS
module.exports = historyModels;