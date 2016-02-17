
const config = require('configure');
const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const pathBuild = config.buildPath;

// Concat and uglify JS file task
gulp.task('scripts', () => {

  gulp.src([
      config.theme_path + pathBuild.source + '/js/main.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.js))
    .pipe(rename('main.min.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.js));

  gulp.src([
      config.theme_path + pathBuild.source + '/js/vendor/jquery.collapse.js',
      config.theme_path + pathBuild.source + '/js/vendor/jquery.modal.js',
      config.theme_path + pathBuild.source + '/js/vendor/jquery.tab.js',
      config.theme_path + pathBuild.source + '/js/vendor/jquery.superfish.js',
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.js))
    .pipe(rename('vendor.min.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.js));
});
