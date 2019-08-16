var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./index.js');

app.use(bodyParser.json());

app.get('/translate',  function(req, res) { index.translateUrl(req,res)});
app.get('/sentiment',  function(req, res) { index.sentimentText(req,res)});

app.post('/translate',  function(req, res) {
    index.translateBody(req,res)
    //res.send('ts')
  });

app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});