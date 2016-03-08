
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 */
const config = require('configure');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const csscomb = require('gulp-csscomb');
const browserSync = require('browser-sync');

const pathBuild = config.buildPath;

// https://github.com/ai/browserslist#queries

// Build CSS files task
gulp.task('styles', () => {
  gulp.src(config.theme_path + pathBuild.source + '/scss/**/*.scss')
    .pipe(sass({
      // outputStyle: 'nested',
      precision: 10,
      errLogToConsole: true,
      onError: function (err) {
        notify().write(err);
      }
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.css))
    .pipe(autoprefixer(config.autoprefixer))
    // .pipe(csscomb())
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.css))
    .pipe(browserSync.reload({stream:true}));
});
