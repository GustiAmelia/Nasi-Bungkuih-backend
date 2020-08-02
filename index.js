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

app.get('/productName',(req,res)=>{
    db.query(
        'SELECT product_name FROM product',
        (error,result)=>{
            res.json(result);
    }
    );
});

app.get('/product',(req,res)=>{
    db.query(
        'SELECT * FROM product WHERE product_name="Espresso"',
        (error,result)=>{
            res.json(result);
        }
    );
});