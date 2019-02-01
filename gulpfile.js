const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const minifyHTML = require('gulp-cleanhtml');
const autoPrefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');


gulp.task('sass', () => {
  return gulp
    .src('./web/src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoPrefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(minifyCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./styles'));
});

gulp.task('js', () => {
  return gulp
    .src('./web/src/**/*.js')
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(concat('app.js'))
    .pipe(minifyJS())
    .pipe(gulp.dest('./js'));
});

gulp.task('html', () => {
  return gulp
    .src('./web/src/html/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./'));
});

gulp.task('default', gulp.series('sass', 'js', 'html'));
