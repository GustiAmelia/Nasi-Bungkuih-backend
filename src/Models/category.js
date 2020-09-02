// IMPORT
const connection =require('../Configs/dbMySql');

// QUERY
const categoryModels ={
    getProductCategory : ()=>{
        return new Promise((resolve,reject)=>{
            const queryString ='SELECT * FROM category';
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
    updateCategory :(body)=>{
        return new Promise((resolve,reject)=>{
            const {id}=body;
            const queryString = `UPDATE category SET ? WHERE category.id = '${id}'`;
            connection.query(queryString,[body],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    deleteCategory : (query)=>{
        return new Promise((resolve,reject)=>{
            const queryString ='DELETE FROM category WHERE id=?';
            connection.query(queryString,[query.id],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            })
        });
    }
};

//EXPORTS
module.exports = categoryModels;

