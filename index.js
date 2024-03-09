const express = require('express');
const app = express();

app.get('/hello', function(req, res){
    res.send('chegou a resposta')
  })
  app.get('/', function(req, res){
      res.send('rota pricipal')
    })
  
    app.get('/nome', function(req, res){
      res.send('gabriel')
    })
  
  app.listen(3000, function(){
      console.log('server up port 3000')
  })