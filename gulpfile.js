/**
 * Created by sbrandt on 05.07.17.
 */
////////////////////////

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    buffer     = require('vinyl-buffer'),
    source     = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    n_fs = require('fs'),
    n_browserify = require('browserify'),
    n_babelify = require('babelify'),
    path = require('path'),
    sourceMaps = require('gulp-sourcemaps');


var config = {
    js: {
        src: './main.js',       // Entry point
        outputDir: './dist/',  // Directory to save bundle to
        mapDir: './srcmaps/',      // Subdirectory to save maps to
        outputFile: 'i18nInput.js' // Name to use for bundle
    },
};

gulp.task('mergejs-fast', function () {
    n_browserify({
        debug: true,
        entries: ['./js/main.js']
    }).transform(n_babelify.configure({
        presets: ['es2015'],
        sourceMapRelative: path.resolve(__dirname, 'js')
    }))
        .on('error', swallowError)
        .bundle()
        .on('error', swallowError)
        .pipe(n_fs.createWriteStream('dist/i18nInput.js'));
});

gulp.task('mergejs', function () {
    n_browserify({
        debug: true,
        entries: ['./js/main.js']
    }).transform(n_babelify.configure({
        presets: ['es2015'],
        sourceMapRelative: path.resolve(__dirname, 'js')
    }))
        .bundle()
        .pipe(source(config.js.src))
        .pipe(buffer())
        .pipe(rename(config.js.outputFile))
        .pipe(uglify({mangle: true}))
        .on('error', swallowError)
        .pipe(sourceMaps.init({ loadMaps : true }))
        .pipe(sourceMaps.write(config.js.mapDir))
        .pipe(gulp.dest(config.js.outputDir))
});

gulp.task('release', ['mergejs'], function () {
    console.log('done');
});

gulp.task('js-only', ['mergejs-fast'], function () {
    console.log('done');
});

gulp.task('fast', ['mergejs-fast'], function () {
    gulp.watch(['js/*.js'], ['js-only']);
});

gulp.task('default', ['fast'], function () {
    console.log('done');
}).on('error', swallowError);

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}