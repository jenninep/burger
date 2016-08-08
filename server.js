var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');

var app = express();
var port = 3000;

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(port, function(){
	console.log("app is listening");
})