var babel = require('gulp-babel'),
	babelify = require('babelify'),	
	browserify = require('browserify'),
	eslint = require('gulp-eslint'),
	fs = require('fs'),
	gulp = require('gulp'),
	nib = require('nib'),
	nodemon = require('gulp-nodemon'),
	stylus = require('gulp-stylus');
 
// ********** config **********
var config = {
	start: 'app.js',
	entry: './src/client.jsx',
	bundlePath: 'build/bundle.js',
	styles: {
		src: './public/styles/app.styl',
		dest: './build'
	},
	watch : {
		jsx: 'src/**/**/**/*.jsx',
		styl: 'public/styles/**/*.styl'
	}
};

// ********** lint **********
// Lint all JSX files
gulp.task('build:lint', function() {
  return gulp.src(config.watch.jsx)
    .pipe(eslint())
    .pipe(eslint.format());
});

// ********** compile **********
// Compile JSX files
gulp.task('build:jsx', function () {
	var bundle = browserify({
		entries: config.entry,
		extensions: ['.jsx'],
		debug: true,
		transform: [babelify.configure({ optional: ["es7.classProperties"]})] // so that we can define static propTypes inside class
	});

	return bundle.bundle()
		.pipe(fs.createWriteStream(config.bundlePath, 'utf8'));
});

// Compile STYL files
gulp.task('build:styl', function() {
	return gulp.src(config.styles.src)
		.pipe(stylus({use: nib(), compress: true}))
		.pipe(gulp.dest(config.styles.dest));
});

// ********** watch **********
// Watch for any changes
gulp.task('watch', function() {
	nodemon({
		script: config.start,
		ext:['js css'] // if any changes to js or css, compile
	})
	.on('restart', function() {
		console.log('Restarted!')
	});

	// watch for any changes in jsx or styl files
	gulp.watch(config.watch.jsx, ['build:lint', 'build:jsx']);
	gulp.watch(config.watch.styl, ['build:styl']);
});