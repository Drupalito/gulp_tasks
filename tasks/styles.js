
/*!
 * [SITE_NAME]
 * Gulp Tasks: styles.js
 *
 * Tâche permettant de construire et optimiser
 * les styles CSS du thèmes.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml')
const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const minifycss = require('gulp-minify-css')
const csscomb = require('gulp-csscomb')
const browserSync = require('browser-sync')
const gulpif = require('gulp-if')

const pathFolder = config.pathfolder

// https://github.com/ai/browserslist#queries

// Build CSS files task
gulp.task('styles', () => {
  gulp.src(config.path.src + pathFolder.source + '/scss/**/*.scss')
    .pipe(sass({
      // outputStyle: 'nested',
      precision: 6,
      errLogToConsole: true,
      onError: err => {
        notify().write(err)
      }
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.css))
    .pipe(autoprefixer({ browsers: config.autoprefixer }))
    // .pipe(csscomb())
    .pipe(gulpif(isProd, rename({ suffix: '.min' })))
    .pipe(gulpif(isProd, minifycss({ keepBreaks: false })))
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.css))
    .pipe(browserSync.reload({stream:true}))
})
