//IMPORT
const connection =require('../Configs/dbMySql');
const { query } = require('express');

// QUERY
const productModels ={
    // getAllProduct : (page,limit,name,sortby,order)=>{
    //     let queryString='';
    //     const offset = (page-1)*limit;
    //     if(name===undefined && sortby===undefined && order===undefined){
    //         queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id LIMIT ${limit} OFFSET ${offset}`;
    //     }
    //     else if(sortby===undefined && order===undefined){
    //         queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id WHERE product_name LIKE '%${name}%' LIMIT ${limit} OFFSET ${offset}`;
    //     }
    //     else if(order===undefined){
    //         queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id WHERE product_name LIKE '%${name}%' ORDER BY ${sortby} LIMIT ${limit} OFFSET ${offset}`;
    //     }
    //     else if(name===undefined){
    //         queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id ORDER BY ${sortby} ${order}LIMIT ${limit} OFFSET ${offset}`;
    //     }
    //     else{
    //         queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id WHERE product_name LIKE '%${name}%' ORDER BY ${sortby} ${order} LIMIT ${limit} OFFSET ${offset}`;
    //     }
        
    //     return new Promise((resolve,reject)=>{
    //         connection.query(queryString,(error,results)=>{
    //             if(!error){
    //                 resolve(results);
    //                 console.log(results);
    //             }else{
    //                 reject(error);
    //             }
    //         });
    //     });
    // },
        // Mobile
    getAllProduct :()=>{
        return new Promise((resolve,reject)=>{
            const queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id`
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
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
            const queryString = `UPDATE product SET ? WHERE product.id=?`;
            connection.query(queryString,[body, body.id],(error,results)=>{
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
        //Mobile
    searchProductByName: (name,sortby)=>{
        return new Promise((resolve,reject)=>{
            const queryString =`SELECT p1.id, product_name AS menu,img_product AS images, price, quantity, category_name, description FROM product AS p1 INNER JOIN category AS p2 ON p1.id_category = p2.id WHERE product_name LIKE '%${name}%' ORDER BY ${sortby}`
            connection.query(queryString,(error,results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    }
    
};

//EXPORTS
module.exports = productModels;
