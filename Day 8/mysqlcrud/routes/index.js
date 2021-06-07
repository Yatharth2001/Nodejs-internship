var express = require('express');
var mysql      = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node-demo'
});

connection.connect(function(err){
  if(!err){
    console.log("DB Connected");
  }else{
    console.log("DB Connection Issue");
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('add-form', { title: 'Express' });
});
router.post('/add-process', function(req, res, next) {
  console.log(req.body);

  const mybodyData={
    Product_name: req.body.txt1,
    Product_detais: req.body.txt2,
    Product_price: req.body.txt3,
  }

  connection.query("insert into tbl_product set ?",mybodyData,function(err,result){
    if(err) throw Err;
    res.redirect('/add')
  });
});

router.get('/display', function(req, res, next) {
  
  connection.query("select * from tbl_product ",function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('display',{db_rows_array:db_rows});
  });
});
module.exports = router;
