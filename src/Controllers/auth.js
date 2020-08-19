const authModel =require('../Models/auth');
const formResponse = require('../Helpers/Form/formResponse');

const authControllers ={
    register:(req,res)=>{
      authModel
      .postNewUser(req.body)
      .then((results)=>{
          const object ={
              msg:'Registere Success'
          }
        formResponse.success(res,object,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })
    },
    login:(req,res)=>{
        authModel
        .loginUser(req.body)
        .then((results)=>{
        formResponse.success(res,results,200);
        }).catch((error)=>{
            formResponse.err(res,error,500);
        })

    }
}

module.exports=authControllers;