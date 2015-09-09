// Module dependencies
var express = require('express'), 
	logger = require('morgan'), 
	favicon = require('serve-favicon'), 
	stylus = require('stylus'), 
	nib = require('nib'), 
    path = require('path');

//Initialize Express
var app = express();

// Load config
app.set('port', (process.env.PORT || 5000));
app.use(favicon(path.join(__dirname , 'src', 'img', 'favicon.ico')));
app.use(logger('dev'));
// app.use(stylus.middleware({
//     src: __dirname + '/src',
//     compile: function compile(str, path) {
//         return stylus(str)
//             .set('filename', path)
//             .use(nib());
//     }
// }));
app.use(express.static(path.join(__dirname, 'build')));

// Start listening on port
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

