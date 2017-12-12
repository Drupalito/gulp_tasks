
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de copier
 * Les librairies externes CSS et JS
 */
const config = require('config-yml');
const gulp = require('gulp');

const pathFolder = config.pathfolder;

// Copy fonts task
gulp.task('libraries', () => {
  return gulp.src(config.path.src + pathFolder.source + '/libraries/**.*')
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.libraries));
});
