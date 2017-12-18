
/*!
 * [SITE_NAME]
 * Gulp Tasks: libraries.js
 *
 * Tâche permettant de copier
 * Les librairies externes CSS et JS.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml');
const gulp = require('gulp');

const pathFolder = config.pathfolder;

// Copy fonts task
gulp.task('libraries', () => {
  return gulp.src(config.path.src + pathFolder.source + '/libraries/**.*')
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.libraries));
});
