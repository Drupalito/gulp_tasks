
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de copier
 * Les librairies externes CSS et JS
 */
const config = require('config-yml');
const gulp = require('gulp');

const pathBuild = config.buildPath;

// Copy fonts task
gulp.task('libraries', () => {
  return gulp.src(config.theme_path + pathBuild.source + '/libraries/**.*')
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.fonts));
});
