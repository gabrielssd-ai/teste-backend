const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const lista1 = require("./routes/lista1")
const lista2 = require("./routes/lista2")

app.use('/lista1', lista1)
app.use('/lista2', lista2)


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