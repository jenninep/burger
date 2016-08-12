var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var myConnection = require('./config/connection.js');

var app = express();
app.use('/static',express.static('public/assets'));
var port = 3000;
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var ORM = require('./config/orm');
ORM.selectAll();
ORM.insertOne('thursdayBurger', false);
ORM.updateOne(2);



//Serve static content for the app from the "public" directory in the application directory.


app.get('/', function(req, res){
	myConnection.query('SELECT * FROM burgers', function(err, data){
		if(err) throw error
			console.log(data);
			res.render('index', {
				burgers:data
		})
	})
});

app.post('/create', function(req, res){
	myConnection.query('INSERT INTO burgers SET ?', {
		burger_name: req.body.burger_name,
		devoured: false
	}, function(err, response){
		if(err) throw err;
		res.redirect('/')
	})
	});



app.put('/update', function(req,res){
	myConnection.query('UPDATE burgers SET ? WHERE ?', [{devoured:true}, {id:req.body.id}], function(err, response){
		if(err)throw err;
		res.redirect('/');

	});
});

app.delete('/delete', function(req,res){
	myConnection.query('DELETE FROM burgers WHERE ?', [{devoured:true}, {id:req.body.id}], function(err, response){
		if(err)throw err;
		res.redirect('/');

	});
});


app.listen(port, function(){
	console.log("app is listening");
})