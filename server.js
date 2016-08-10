var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var myConnection = require('./config/connection.js');

var app = express();
app.use('/static',express.static('public/assets'));
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var ORM = require('./config/orm');



//Serve static content for the app from the "public" directory in the application directory.


app.get('/', function(req, res){
	myConnection.query('SELECT * FROM burgers', function(err, data){
		if(err) throw error
			res.render('index', {
				burgers:data
		})
	})
});




app.listen(port, function(){
	console.log("app is listening");
})