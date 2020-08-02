// IMPORT
const connection =require('../Configs/dbMySql');
const e = require('express');

// QUERY
const categoryModels ={
    getProductCategory : ()=>{
        return new Promise((resolve,reject)=>{
            const queryString ='SELECT p1.id, product_name AS product, category_name AS category FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    postNewCategory : (body)=>{
        return new Promise((resolve,reject)=>{
            const queryString='INSERT INTO category SET ?';
            connection.query(queryString,[body],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
};

//EXPORTS
module.exports = categoryModels;

