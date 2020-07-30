const mySQL = require("mysql");

const db = mySQL.createConnection({
    host:"localhost",
    user:"root",
    database:"api_project",
    password:"",
})
db.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected");
})

module.exports= db;