const { series, parallel, src, dest, task } = require('gulp');

function js(cb) {
  return src('src/js/main.js')
  .pipe(dest('dist/'));
}

function css(cb) {
    return src('src/css/*.css')
    .pipe(dest('dist/'));
}

function clean(cb) {
    // body omitted
    cb();
}

exports.build = task('default', series(clean, parallel(js, css)));