var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('master');
});
router.get('/master', function(req, res, next) {
  res.render('master');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/products', function(req, res, next) {
  res.render('product');
});
router.get('/contactus', function(req, res, next) {
  res.render('contact');
});
router.get('/MyForm', function(req, res, next) {
  res.render('form');
});

router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/header', function(req, res, next) {
  res.render('header');
});
router.post('/form-process', function(req, res, next) {
  var a = req.body.txt1;
  var b = req.body.txt2;

  console.log(req.body);
  console.log("a value is " + a + " b value is " + b);

  res.render('ans',{mya:a,myb:b});
});

module.exports = router;
