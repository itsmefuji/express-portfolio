/*
Yuji Fujiyama-200300256
Express Porfolio Assignment
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'the Home Page' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Contact Me page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Service page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router;
