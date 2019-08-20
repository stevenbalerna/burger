var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
  burger.all(function(burgerData){
    res.render("index", {
      burger_data: burgerData
    })
  })
});

router.post('/burgers/create', function(req, res) {
  burger.create(req.body.burger_name, function(data) 
  {res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.update(req.params.id, function(data) {
    res.sendStatus(200);
  });
});

module.exports = router;