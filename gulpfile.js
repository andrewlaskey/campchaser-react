var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var path = {
  HTML: './src/*.html',
  SASS: './src/assets/sass/**/*',
  JS: './src/assets/js/**/*.js',
  JSX: './src/assets/js/**/*.jsx',
  OUT: 'build.js',
  DEST: './dist',
  DEST_CSS: './dist/assets/styles',
  DEST_JS: './dist/assets/js',
  ENTRY_POINT: './src/assets/app.js'
};

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('copy', function () {
  return gulp.src([
    path.HTML
  ])
  .pipe(gulp.dest(path.DEST));
});

gulp.task('sass', function(done) {
  return gulp.src(path.SASS)
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(path.DEST_CSS))
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(path.DEST_CSS));
});

gulp.task('js', function () {
  return browserify({
    entries: [path.ENTRY_POINT],
    transform: [['babelify', {presets: ['es2015', 'react']}]],
    require: ['react', 'react-dom', 'react-router'],
    fullPaths: true,
    debug: true
  })
  .bundle()
  .pipe(source(path.OUT))
  .pipe(gulp.dest(path.DEST_JS));
})

gulp.task('serve', ['copy','sass','js','browser-sync'], function () {
  return gulp.watch([
    path.HTML, path.SASS, path.JS, path.JSX
  ],[
    'copy', 'sass', 'js', browserSync.reload
  ]);
});

gulp.task('default', ['serve']);
