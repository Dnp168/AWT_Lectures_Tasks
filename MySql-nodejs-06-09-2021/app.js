const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.engine('hbs', exphbs({
    defaultLayout: 'form1',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "form"
});

db.connect((err) => {
    if(err){
        throw RegExp;
    }
    console.log('Mysql connected...');
})

app.get('/createdb', (req,res)=>{
    let sql = 'CREATE DATABASE form';
    db.query(sql, (err, result)=> {
        if(err)
        {
            throw err;
        }
        console.log(result); 
        res.send('database created');
    })
})



app.get('/', (req, res)=>{
    res.render('home');
});

app.post("/addinfo", (req,res)=>{

    const dbInsert="INSERT INTO student(sub_id,sub_name,inst_name,dept_name,sem) VALUES (?)";

    const value=[req.body.sub_code,req.body.sub_name,req.body.ins_name,req.body.dept_name,req.body.semester]

    db.query(dbInsert,[value],(err,result)=>{
        if(err) throw err;
        console.log(`Total affected ROWS: ${result['affectedRows']}`)
        res.redirect('/display');
    })
   
});


  
app.get('/getdata', (req,res)=> {
    let sql = 'SELECT * FROM student';
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Data Fetched...');
    });
});

app.listen('3000',()=> {
    console.log('Server started on port 3000');
});