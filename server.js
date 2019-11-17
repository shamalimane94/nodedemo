const express = require('express')
const bodyParser = require('body-parser')
var product=require('./product')
const app = express()
app.router('/product',product)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(bodyParser.json())

  app.get('/', function(req, res) {
    // Handle the get for this route
    res.send(`<h1>Welcome</h1>`);

  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });

app.listen(4000,'0.0.0.0' ,()=>{
console.log('Server started on port 4000')
})
