
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant d'exécuter
 * les tâches de construction
 */
const config = require('config-yml');
const gulp = require('gulp');

// Register tasks
gulp.task('developpement', [
  'fonts',
  'libraries',
  'images',
  'styles',
  'scripts',
]);

// Alias task
gulp.task('dev', ['developpement']);
