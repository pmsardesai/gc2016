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
app.use('/documents', express.static(path.join(__dirname, 'public', 'documents')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));


// Get html when page is refreshed
var directPage = function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
}
app.get('/highlights', directPage);
app.get('/schedule', directPage);
app.get('/hotel', directPage);
app.get('/concert', directPage);
app.get('/committee', directPage);
app.get('/sponsors', directPage);
app.get('/contests', directPage);
app.get('/gallery', directPage);
app.get('/pastevents', directPage);
app.get('/register', directPage);
app.get('/comingsoon', directPage);

// Start listening on port
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
