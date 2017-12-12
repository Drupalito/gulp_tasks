
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de copier
 * les fonts icons et fonts family
 */
const config = require('config-yml');
const gulp = require('gulp');

const pathFolder = config.pathfolder;

// Copy fonts task
gulp.task('fonts', () => {
  return gulp.src(config.path.src + pathFolder.source + '/fonts/**.*')
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.fonts));
});
