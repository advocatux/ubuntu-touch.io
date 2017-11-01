var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/apps', function(req, res, next) {
  res.render('apps');
});

router.get('/contribute', function(req, res, next) {
  res.render('contribute');
});

router.get('/devices', function(req, res, next) {
  res.render('devices');
});

router.get('/install', function(req, res, next) {
  res.render('install');
});

router.get('/telegram', function(req, res, next) {
  res.redirect("https://telegram.me/ubports");
});

module.exports = router;
