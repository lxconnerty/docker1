const express = require('express');
const app = module.exports = express();

app.get('/', function(req, res){
  res.send('hello boyyyyyy');
});
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}