var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var path = {
  HTML: './src/*.html',
  SASS: './src/assets/sass/**/*',
  DEST: './dist',
  DEST_CSS: './dist/assets/styles'
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

gulp.task('serve', ['copy','sass','browser-sync'], function () {
  return gulp.watch([
    path.HTML, path.SASS
  ],[
    'copy', 'sass', browserSync.reload
  ]);
});

gulp.task('default', ['serve']);
