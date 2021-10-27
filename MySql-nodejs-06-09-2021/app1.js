const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql"
});

db.connect((err) => {
    if(err){
        throw RegExp;
    }
    console.log('Mysql connected...');
})

const app = express();

app.get('/createdb', (req,res)=>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result)=> {
        if(err)
        {
            throw err;
        }
        console.log(result); 
        res.send('database created');
    })
})

app.listen('3000',()=> {
    console.log('Server started on port 3000');
});