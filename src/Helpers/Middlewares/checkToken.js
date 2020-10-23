const jwt = require("jsonwebtoken");

const formResponse = require("../Form/formResponse");

const checkToken ={
    checkToken: (req,res,next)=>{
        const bearerToken = req.header('x-access-token');
        if(!bearerToken){
            res.json({
                msg : 'Please Login First'
            });
        }
        try{
            const token = bearerToken.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.decodedToken = decoded;
            next()
        }
        catch (e) {
            formResponse.err(res, e);
          }
    },
    adminToken:(req,res,next)=>{
        const bearerToken = req.header('x-access-token');
        if(!bearerToken){
            res.json({
                msg : 'Please Login First'
            });
        }
        try{
            const token = bearerToken.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded);
            if(decoded.level_id===1){
                req.decodedToken = decoded;
                next()
            }else{
                res.json({
                    msg:'you are not allowed'
                });
            }
        }
        catch (e) {
            formResponse.err(res, e);
          }
    }
}


module.exports=checkToken;