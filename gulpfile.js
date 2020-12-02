const gulp = require('gulp'),
babel = require('gulp-babel'),
watch = require('gulp-watch'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
buffer     = require('vinyl-buffer'),
source     = require('vinyl-source-stream'),
rename = require('gulp-rename'),
fs = require('fs'),
terser = require('gulp-terser'),
browserify = require('browserify'),
babelify = require('babelify'),
path = require('path'),
concat = require('gulp-concat'),
concatCss = require('gulp-concat-css'),
clean = require('gulp-clean'),
sourceMaps = require('gulp-sourcemaps');

var config = {
    js: {
        src: './src/js/**/*.js',       // Entry point
        srcPkg: './src/js/main.js',       // Entry point
        outputDir: './dist/',  // Directory to save bundle to
        outputDirPkg: './pkg',
        outputFile: 'i18nInput.js' // Name to use for bundle
    },
    flags : {
        src:  ['src/flags/**/*.svg'],
        dst: './dist/flags/',
        dstPkg: './pkg/flags/'
    },
    css : {
        outputDir: './dist/',  // Directory to save bundle to
        outputDirPkg: './pkg/',  // Directory to save bundle to
    }
};

gulp.task('css', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(config.css.outputDir));
});

gulp.task('cssPkg', function (done) {
    return gulp.src('src/css/**/*.css')
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(config.css.outputDirPkg));
});


gulp.task('copy', function () {
    return gulp.src(config.flags.src)
        .pipe(gulp.dest(config.flags.dst));
});

gulp.task('copyPkg', function () {
    return gulp.src(config.flags.src)
    .pipe(gulp.dest(config.flags.dstPkg));
});

gulp.task('mergejs', function () {
    return gulp.src(config.js.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(config.js.outputDir))
});


gulp.task('packjs', function () {
        return browserify({
            entries: [config.js.srcPkg]
        }).transform(babelify.configure({
            presets: [[
                '@babel/env',
            {
                "useBuiltIns": 'usage',
                "corejs": {"version": 3, "proposals": true},
                "debug": false,
                "targets": {
                "esmodules": false,
                "browsers": [
                    "> 0.25%, not dead"
                ]
                }
            }
            ]]
        }))
        .bundle()
        .pipe(source(config.js.srcPkg))
        .pipe(buffer())
        .pipe(rename(config.js.outputFile))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.js.outputDirPkg))
});

gulp.task('clean', function() {
    return gulp.src('dist/', {read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task('cleanPkg', function() {
    return gulp.src('pkg/', {read: false, allowEmpty: true})
        .pipe(clean());
});

gulp.task('default', gulp.series('clean', gulp.parallel('mergejs', 'css', 'copy')));


gulp.task('pkg', gulp.series('cleanPkg', 'packjs', 'cssPkg', 'copyPkg'));
