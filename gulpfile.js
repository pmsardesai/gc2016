var babel = require('gulp-babel'),
	babelify = require('babelify'),	
	browserify = require('browserify'),
	eslint = require('gulp-eslint'),
	fs = require('fs'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	nib = require('nib'),
	nodemon = require('gulp-nodemon'),
	stylus = require('gulp-stylus');

var browserSync = require('browser-sync').create();
 
// ********** config **********
var config = {
	start: 'app.js',
	entry: './src/client.jsx',
	bundleDir: './build',
	bundleJS: 'build/bundle.js',
	jsx: {
		src: 'src/**/**/*.jsx'
	},
	styles: {
		src: './public/styles/app.styl',
		dest: './build'
	},
	images: {
		src: './public/images/*.png',
		dest: './build/images'
	},
	watch : {
		jsx: 'src/**/**/*.jsx',
		styl: 'public/styles/**/*.styl'
	}
};

// ********** lint **********
// Lint all JSX files
gulp.task('build:lint', function() {
  return gulp.src(config.jsx.src)
    .pipe(eslint())
    .pipe(eslint.format());
});

// ********** compile **********
// Compile JSX files
gulp.task('build:jsx', ['build:lint'], function () {
	var bundle = browserify({
		entries: config.entry,
		extensions: ['.jsx'],
		debug: true,
		transform: [babelify.configure({ optional: ["es7.classProperties"]})] // so that we can define static propTypes inside class
	});

	return bundle.bundle()
		.pipe(fs.createWriteStream(config.bundleJS, 'utf8'));
});

// Compile images
gulp.task('build:images', function() {
  return gulp.src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest));
});

// Compile STYL files
gulp.task('build:styl', function() {
	return gulp.src(config.styles.src)
		.pipe(stylus({use: nib(), compress: true}))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(browserSync.stream());
});

// ********** watch **********
gulp.task('watch', function() {
	nodemon({
		script: config.start,
		ext:['js css'] // if any changes to js or css, compile
	});

	// watch for any changes in jsx or styl files
	gulp.watch(config.watch.jsx, ['build:jsx']);
	gulp.watch(config.watch.styl, ['build:styl']);

	browserSync.init( {
		server: [config.bundleDir],
		logFileChanges: false
	});
});

// ********** combined ************
gulp.task('all', 
	['build:all',
	 'watch']);

gulp.task('build:all', 
	['build:jsx', 
	 'build:images',	
	 'build:styl']);