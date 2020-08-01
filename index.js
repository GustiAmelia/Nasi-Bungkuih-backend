const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mySQL = require("mysql");


const app = express();

app.get("/",(_,res)=>{
    res.json({
        msg: "hi"
    });
});

const port = 7000;
app.listen(port,()=>{
    console.log(`Server is Running at ${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger("dev"));


const db = mySQL.createConnection({
    host:"localhost",
    user:"root",
    database:"coffee_shop",
    password:"",
})
db.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected");
})

app.get('/product',(req,res)=>{
    db.query(
        'SELECT * FROM product',
        (error,result)=>{
            res.json(result);
    }
    );
});