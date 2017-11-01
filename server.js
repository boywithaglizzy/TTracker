// modules =================================================

var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');


// configuration ===========================================
	
var db = require('./config/db');
var port = process.env.PORT || 8080; // set our port

mongoose.connect(db.url)
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
 
app.use(express.static(__dirname + '/public')); 		    // set the static files location /public/img will be /img for users

app.use(morgan('dev'));                                        	    // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));                // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                         // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));     // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes


// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 				// expose app
