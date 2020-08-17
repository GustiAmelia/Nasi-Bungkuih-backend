// IMPORT
const connection =require('../Configs/dbMySql');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel ={
  postNewUser : (body)=>{
    return new Promise((resolve,reject)=>{
      const querySelect='SELECT username FROM users WHERE username=?';
      connection.query(querySelect,[body.username],(error,results)=>{
        if(!results){
          reject(error)
        }
        if(results.length){
          reject({
            msg:'username is already taken!'
          })
        }else{
          bcrypt.genSalt(10,(error,salt)=>{
            if(error){
              reject(error);
            }
    
            const{password}=body;
            bcrypt.hash(password,salt,(error,hashedPassword)=>{
              if(error){
                reject(error);
              }
              const newBody={...body, password:hashedPassword};
              const qs = 'INSERT INTO users SET ?';
              connection.query(qs,newBody,(error,results)=>{
                console.log(newBody);
                if(!error){
                    resolve(results);
                }else{
                    reject(error);
                }
              });
            });
          });
        }
      })
      
    });
  },
  loginUser :(body)=>{
    return new Promise((resolve,reject)=>{
      const qs = 'SELECT username, password, level_id FROM users WHERE username=?';
      connection.query(qs, body.username ,(error,results)=>{
        if(error){
          reject(error)
        }
        if(!results.length){
          reject('User Not Found');
        }
        else{
          bcrypt.compare(body.password, results[0].password,(error,isSame)=>{
            if(isSame){
              const {username}=body;
              const {level_id}=results[0];
              const payload={
                username,
                level_id
              };
              const token = jwt.sign(payload,process.env.SECRET_KEY,{
                expiresIn:'10d',
              });
              const msg ='Login Success';
              resolve({msg,token});
            }
            if(!results){
              reject({msg:'Wrong Password'});
            }
            if(error){
              reject(error);
            }
          });
        }
      });
    });
  },
}

module.exports=authModel;