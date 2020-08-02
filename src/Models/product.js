//IMPORT
const connection =require('../Configs/dbMySql');

// QUERY
const productModels ={
    getAllProduct : ()=>{
        return new Promise((resolve,reject)=>{
            const queryString ='SELECT p1.id, product_name, price, quantity, category_name AS category FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    postNewProduct : (body)=>{
        return new Promise((resolve,reject)=>{
            const queryString ='INSERT INTO product SET ?';
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
module.exports = productModels;
