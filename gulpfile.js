/**
 * Created by sbrandt on 05.07.17.
 */
////////////////////////
var gulp = require('gulp'),
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
        srcPkg: './js/main.js',       // Entry point
        outputDir: './dist/',  // Directory to save bundle to
        outputDirPkg: './pkg',
        outputFile: 'i18nInput.js' // Name to use for bundle
    },
    flags : {
        src:  ['flags/**/*.svg'],
        dst: './dist/flags/',
        dstPkg: './pkg/flags/'
    },
    css : {
        outputDir: './dist/',  // Directory to save bundle to
        outputDirPkg: './pkg/',  // Directory to save bundle to
    }
};

gulp.task('css', function (done) {
    gulp.src('css/**/*.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(config.css.outputDir));
});

gulp.task('cssPkg', function (done) {
    gulp.src('css/**/*.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(config.css.outputDirPkg));
});


gulp.task('copy', function (done) {
    gulp.src(config.flags.src)
        .pipe(gulp.dest(config.flags.dst)).on('error', swallowError);
    done();
});

gulp.task('copyPkg', function (done) {
    gulp.src(config.flags.src)
    .pipe(gulp.dest(config.flags.dstPkg)).on('error', swallowError);
    done();
});

gulp.task('mergejs', function (done) {
    gulp.src(config.js.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(config.js.outputDir))
    done();
});


gulp.task('packjs', function (done) {
    browserify({
            entries: [config.js.srcPkg],
            debug: true
        })
        .transform(babelify.configure({
            presets: ["es2015"]
        }))
        .bundle()
        .pipe(source(config.js.outputFile))
        .pipe(buffer())
        .pipe(rename(config.js.outputFile))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify({mangle: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.js.outputDirPkg))
    done();
});

gulp.task('clean', function(done) {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('cleanPkg', function(done) {
    gulp.src('pkg/', {read: false})
        .pipe(clean());
    done();
});

//gulp.task('default', ['mergejs', 'css', 'copy'], () => {
//    console.log('done');
//});
//gulp.task('pkg', ['cleanPkg', 'packjs', 'cssPkg', 'copyPkg'], () => {
//    console.log('done');
//});


gulp.task('default', gulp.series('cleanPkg', 'packjs', 'cssPkg', 'copyPkg', gulp.series('mergejs', 'css', 'copy')));

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}
