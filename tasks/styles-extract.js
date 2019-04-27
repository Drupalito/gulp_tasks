
/*!
 * [SITE_NAME]
 * Gulp Tasks: styles-extract.js
 *
 * Tâche permettant d'extraire certaines propriétés
 * des feuilles de styles CSS
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml')
const gulp = require('gulp')
const extract = require('gulp-style-extract')
const concat = require('gulp-concat')
const purge = require('gulp-css-purge')

const pathFolder = config.pathfolder

// Build CSS files task
gulp.task('extract', function() {
  gulp.src([
    '!'+config.path.dist + pathFolder.dist.css + '/*.editor.*',
    '!'+config.path.dist + pathFolder.dist.css + '/debug.grid.*',
    '!'+config.path.dist + pathFolder.dist.css + '/modules/**/*-rtl.*',
    config.path.dist + pathFolder.dist.css + '/**/*.css',
  ])
   .pipe(extract({
      properties: [
        'color',
        'background', 'background-color',
        'font-family', 'font-weight', 'font-style',
      ]
  }))
  .pipe(gulp.dest(config.path.dist + pathFolder.dist.css + '/extractcolor'))
  .pipe(concat('theme-color.css'))
  .pipe(purge({
    trim : true,
    shorten : true,
    verbose : true
  }))
  .pipe(gulp.dest(config.path.dist + pathFolder.dist.css + '/extracttheme'))
})
