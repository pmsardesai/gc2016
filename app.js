// Module dependencies
var express = require('express'), 
	favicon = require('serve-favicon'), 
	logger = require('morgan'), 
    path = require('path');

//Initialize Express
var app = express();

// Load config
app.set('port', (process.env.PORT || 5000));
app.use(favicon(path.join(__dirname , 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/documents', express.static(__dirname + '/public/documents'));

// Start listening on port
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
