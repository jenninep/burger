var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var myConnection = require('./config/connection.js');

var app = express();
app.use(express.static(__dirname + '/public'));
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view enigine', 'handlebars');



//Serve static content for the app from the "public" directory in the application directory.




app.get('/', function(req,res){
	connection.query('SELECT * FROM burgers;', function(err, data){
		if (err) throw err;
		res.render('index', {events: data});
	});
})

app.post('/create', function(req, res){
	connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.burger_name], function(err,result){
		if (err) throw err;
		res.redirect('/');

	});
});









app.listen(port, function(){
	console.log("app is listening");
})