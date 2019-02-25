/**
 * Created by sbrandt on 05.07.17.
 */
////////////////////////
const gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    buffer     = require('vinyl-buffer'),
    source     = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    path = require('path'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    clean = require('gulp-clean'),
    sourceMaps = require('gulp-sourcemaps');

var config = {
    js: {
        src: './js/**/*.js',       // Entry point
        outputDir: './dist/',  // Directory to save bundle to
        mapDir: './srcmaps/',      // Subdirectory to save maps to
        outputFile: 'i18nInput.js' // Name to use for bundle
    },
    flags : {
        src:  ['flags/**/*.svg'],
        dst: './dist/flags/'
    },
    css : {
        outputDir: './dist/',  // Directory to save bundle to
    }
};

gulp.task('css', function () {
    return gulp.src('css/**/*.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(config.css.outputDir));
});


gulp.task('copy', function () {
    return gulp.src(config.flags.src)
        .pipe(gulp.dest(config.flags.dst));
});

gulp.task('mergejs', function () {
        gulp.src(config.js.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('clean', function() {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean', 'mergejs', 'css', 'copy'], function () {
    console.log('done');
}).on('error', swallowError);

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}