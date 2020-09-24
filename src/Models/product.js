//IMPORT
const connection =require('../Configs/dbMySql');

// QUERY
const productModels ={
    getAllProduct :()=>{
        return new Promise((resolve,reject)=>{
            const queryString ='SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name AS category FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id';
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    // getAllProduct : (page,limit)=>{
    //     return new Promise((resolve,reject)=>{
    //         const offset = (page-1)*limit;
    //         const queryString ='SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name AS category FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id LIMIT ? OFFSET ?';
    //         connection.query(queryString,[Number(limit),offset],(error,results)=>{
    //             if(!error){
    //                 resolve(results);
    //                 console.log(results);
    //             }else{
    //                 reject(error);
    //             }
    //         });
    //     });
    // },
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
            const { id } = body;
            const queryString = `UPDATE product SET ? WHERE product.id=${id}`;
            connection.query(queryString,[body],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            });
        });
    },
    deleteProduct : (query)=>{
        return new Promise((resolve,reject)=>{
            const queryString ='DELETE FROM product WHERE id=?';
            connection.query(queryString,[query.id],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            })
        });
    },
    searchProductByName :(word, by, order,page,limit)=>{
        return new Promise((resolve,reject)=>{
            const offset =(page-1)*limit;
            const queryString =`SELECT * FROM product WHERE product_name LIKE '%${word}%' ORDER BY ${by} ${order} LIMIT ${limit} OFFSET ${offset}`;
            connection.query(queryString,[word,by,order,Number(limit),offset],(error,results)=>{
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
            }) 
        });
    },
    
};

//EXPORTS
module.exports = productModels;
