const mySql = require('mysql');

const connection = mySql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'coffee_shop',
    password : ''
});
connection.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
});

module.exports = connection;