const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client/src')))

app.get('/', function(req, res){
  res.send('hello World');

});

app.listen(3000, function(){
  console.log('server started on port 3000.....');
})
