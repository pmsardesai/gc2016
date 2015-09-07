// Module dependencies
var express = require('express'),
	logger = require('morgan'),
	favicon = require('serve-favicon'),
	stylus = require('stylus'),
	nib = require('nib');

//Initialize Express
var app = express();

// Config
app.set('port', (process.env.PORT || 5000))
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/src/images/favicon.ico'));
app.use(logger('dev'));
app.use(stylus.middleware(
  { 
  	src: __dirname + '/src',
  	compile: function compile(str, path) {
	  return stylus(str)
	    .set('filename', path)
	    .use(nib())
	}
  }
));
app.use(express.static(__dirname + '/src'));

// Render homepage
app.get('/', function(req, res) {
  res.render('layout');
});

// Start listening on port
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});