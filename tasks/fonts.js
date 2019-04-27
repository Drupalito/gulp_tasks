
/*!
 * [SITE_NAME]
 * Gulp Tasks: fonts.js
 *
 * Tâche permettant de copier
 * les fonts icons et fonts family.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml')
const gulp = require('gulp')

const pathFolder = config.pathfolder

// Copy fonts task
gulp.task('fonts', () => {
  return gulp.src(config.path.src + pathFolder.source + '/fonts/**/*')
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.fonts))
})
