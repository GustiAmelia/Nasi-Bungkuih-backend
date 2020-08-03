// IMPORT
const connection =require('../Configs/dbMySql');

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
    updateCategory :(body)=>{
        return new Promise((resolve,reject)=>{
            const { category_name,id } = body;
            const queryString = `UPDATE category SET category_name = ? WHERE id = '${id}'`;
            connection.query(queryString,[category_name,id],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    deleteCategory : (body)=>{
        return new Promise((resolve,reject)=>{
            const queryString ='DELETE FROM category WHERE id=?';
            connection.query(queryString,[body],(error,results)=>{
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

