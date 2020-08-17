const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'./public/images');
    },
    filename : (req,file,cb)=>{
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`;
        cb(null,nameFormat);
    }
});

const limits ={
    fileSize: 1*1000*1000
};
const fileFilter =(req,file,cb)=>{
    const fileType = /jpg|jpeg|png|gif/;
    const extName = fileType.test(path.extname(file.originalname).toLowerCase());
    if(extName){
        cb(null,true);
    }else{
        cb('Error:Images Only');
    }
};

const upload = multer({
    storage,
    limits,
    fileFilter
});

const uploadImage ={
    singleUpload:(req,res,next)=>{
        const singleUpload=upload.single('img_product');
        singleUpload(req,res,(error)=>{
            if(error){
                res.json({
                    msg:error
                })
            }else{
                console.log(req.body)
                req.body.img_product=`http://localhost:${process.env.PORT}/images/${req.file.filename}`
                // res.json({
                //     imageURI:`/images/${req.file.filename}`
                // })
                // res.json({
                //     file:req.file
                // })
                next()
            }
        })
    },
}

module.exports=uploadImage;