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
    updateProduct :(body)=>{
        return new Promise((resolve,reject)=>{
            const { product_name, price, id_category } = body;
            const queryString = `UPDATE product SET product_name = ?, price = ?, id_category = ? WHERE product.product_name = '${product_name}'`;
            connection.query(queryString,[product_name, price, id_category],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    deleteProduct : (body)=>{
        return new Promise((resolve,reject)=>{
            const queryString ='DELETE FROM product WHERE id=?';
            connection.query(queryString,[body.id],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            })
        });
    },
    sortProductByName:()=>{
        return new Promise((resolve,reject)=>{
            const queryString='SELECT * FROM product ORDER BY product_name';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    sortProductByCategory :()=>{
        return new Promise((resolve,reject)=>{
            const queryString ='SELECT * FROM product ORDER BY id_category';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error);
                }
            })
        })
    },
    sortProductByPrice : ()=>{
        return new Promise((resolve,reject)=>{
            const queryString ='SELECT * FROM product ORDER BY price';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    searchProductByName :(word)=>{
        return new Promise((resolve,reject)=>{
            const queryString =`SELECT * FROM product WHERE product_name LIKE '%${word}%'`;
            connection.query(queryString,(error,results)=>{
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
module.exports = productModels;
