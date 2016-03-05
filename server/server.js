var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to mongo in shell:
// mongo ds039185.mongolab.com:39185/jmancherje_flights -u jmancherje -p justin
mongoose.connect('mongodb://jmancherje:justin@ds039185.mongolab.com:39185/jmancherje_flights');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function() {
  console.log('connected to database successfully!');
});

// routes
require('./routes.js')(app, express);



app.use(express.static(__dirname + '/../public'));

app.listen(8000);
console.log('server running on http://127.0.0.1:8000');