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


router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/header', function(req, res, next) {
  res.render('header');
});
module.exports = router;
