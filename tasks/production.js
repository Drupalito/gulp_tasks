
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant d'exécuter
 * les tâches de construction
 */
const config = require('configure');
const gulp = require('gulp');

// Register tasks
gulp.task('production', [
  'fonts',
  'images',
  'styles',
  'scripts',
]);
