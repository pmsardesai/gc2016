var babel = require('gulp-babel'),
	babelify = require('babelify'),	
	browserify = require('browserify'),
	fs = require('fs'),
	gulp = require('gulp'),
	nib = require('nib'),
	nodemon = require('gulp-nodemon'),
	path = require('path'),
	stylus = require('gulp-stylus');
 
var sourceCode = 'src/components/**/*.js'

// compile jsx source code
gulp.task('build:jsx', function () {
	var bundle = browserify({
		entries: './src/client.jsx',
		extensions: ['.jsx'],
		debug: true,
		transform: [babelify]
	});

	return bundle.bundle()
		.pipe(fs.createWriteStream(path.join(__dirname, 'build', 'bundle.js'), 'utf8'));
});

// compile stylus source code
gulp.task('build:styl', function() {
	return gulp.src('./public/styles/app.styl')
		.pipe(stylus({use: nib(), compress: true}))
		.pipe(gulp.dest('./build'));
});

// default gulp task to compile both jsx and styl files
gulp.task('compile', ['build:jsx', 'build:styl']);