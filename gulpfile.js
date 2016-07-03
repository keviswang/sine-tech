
const Gulp = require('gulp');
const Less = require('gulp-less');
const AutoPrefixer = require('gulp-autoprefixer');
const CleanCSS = require('gulp-clean-css');
const Rename = require('gulp-rename');
const Uglify = require('gulp-uglify');

Gulp.task('less', () => {
  return Gulp.src('less/main.less')
    .pipe(Less())
    .pipe(AutoPrefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(CleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(Rename({
      suffix: '.min'
    }))
    .pipe(Gulp.dest('css/'))
});

Gulp.task('js', () => {
  return Gulp.src('js/main.js')
        .pipe(Uglify())
        .pipe(Rename({
          suffix: '.min'
        }))
        .pipe(Gulp.dest('js'));
});

Gulp.task('default', ['less', 'js']);
