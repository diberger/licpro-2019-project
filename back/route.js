var express = require('express');
var app = express();

var Stub = require('./data/Stub');

app.get('/episodes/:id', function (req, res) {
  res.send(req.params.id)
});

app.get('/episodes/', function (req, res) {
  let stub = new Stub();
  let netflix = stub.loadNetflix();
  let names = "";

  neflix.forEach(function(value){
    names += value.name;
  });

  res.send(names)
});

app.listen(3000);